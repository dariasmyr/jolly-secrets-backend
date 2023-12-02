import * as console from 'node:console';
import process from 'node:process';

import { Injectable } from '@nestjs/common';
import { EventApplicationPair, EventApplicationStatus } from '@prisma/client';

import { CreateEventApplicationInput } from '@/app/event-application/event-application.resolver';
import { CreatePreferenceInput } from '@/app/event-application/preference/preference.resolver';
import { NotificationService } from '@/app/notification/notification.service';
import { PrismaService } from '@/common/prisma/prisma.service';
import { I18nService } from '@/i18n/i18n.service';

@Injectable()
export class EventApplicationPairService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly notificationsService: NotificationService,
    private i18n: I18nService,
  ) {}

  async upsertEventApplicationPair(
    input: CreateEventApplicationInput,
    language: string,
  ): Promise<EventApplicationPair> {
    const suitableEventApplicationPair = await this.findSuitableApplicationPair(
      input.eventId,
      input.preferences,
    );

    console.log('suitableEventApplicationPair', suitableEventApplicationPair);

    return suitableEventApplicationPair
      ? this.updateEventApplicationPair(
          input,
          suitableEventApplicationPair.id,
          language,
        )
      : this.createEventApplicationPair(input, language);
  }

  private async findSuitableApplicationPair(
    eventId: number,
    preferences: CreatePreferenceInput[],
  ): Promise<EventApplicationPair | undefined> {
    const evenApplicationsWithoutPair: EventApplicationPair[] =
      await this.prismaService.eventApplicationPair.findMany({
        where: {
          eventId,
          // eslint-disable-next-line unicorn/no-null
          eventApplicationSecondId: null,
        },
        include: { applicationFirst: true },
      });

    if (evenApplicationsWithoutPair.length === 0) {
      return undefined;
    }
    for (const eventApplicationPair of evenApplicationsWithoutPair) {
      const { eventApplicationFirstId } = eventApplicationPair;

      const eventApplicationFirstPreferences =
        await this.prismaService.preference.findMany({
          where: {
            applicationId: eventApplicationFirstId,
          },
        });

      const uniquePriceRangesFromDatabaseArray = [
        ...new Set(
          eventApplicationFirstPreferences.map((preference) => {
            return preference.priceRange.toString();
          }),
        ),
      ];

      const uniquePriceRangesFromInputArray = new Set(
        new Set(
          preferences.map((preference) => {
            return preference.priceRange.toString();
          }),
        ),
      );

      const crossPriceRanges = uniquePriceRangesFromDatabaseArray.filter(
        (priceRange) => {
          return uniquePriceRangesFromInputArray.has(priceRange);
        },
      );

      if (crossPriceRanges.length > 0) {
        return eventApplicationPair;
      }
    }
    return undefined;
  }

  async createEventApplicationPair(
    input: CreateEventApplicationInput,
    language: string,
  ): Promise<EventApplicationPair> {
    const { accountId, eventId, preferences } = input;
    const result = await this.prismaService.$transaction(async (prisma) => {
      const eventApplication = await prisma.eventApplication.create({
        data: {
          accountId,
          status: EventApplicationStatus.LOOKING_FOR_PAIR,
          preferences: {
            create: preferences,
          },
        },
      });

      return prisma.eventApplicationPair.create({
        data: {
          eventApplicationFirstId: eventApplication.id,
          eventId,
        },
      });
    });

    await this.notificationsService.createNotification(
      this.i18n.getTranslation(language)(
        'notifications.looking_for_pair.title',
      ),
      accountId,
      `${this.i18n.getTranslation(language)('notifications.description')} ${
        process.env.SECRET_SANTA_DOMAIN
      }/event?id=${eventId}`,
    );

    console.log('CREATE result', result);
    return result;
  }

  async updateEventApplicationPair(
    input: CreateEventApplicationInput,
    eventApplicationPairId: number,
    language: string,
  ): Promise<EventApplicationPair> {
    const { accountId, preferences, eventId } = input;
    const result = this.prismaService.$transaction(async (prisma) => {
      const eventApplicationSecond = await prisma.eventApplication.create({
        data: {
          accountId,
          status: EventApplicationStatus.PAIRED,
          preferences: {
            create: preferences,
          },
        },
      });

      const eventApplicationFirst =
        await prisma.eventApplicationPair.findUnique({
          where: {
            id: eventApplicationPairId,
          },
          include: {
            applicationFirst: true,
          },
        });

      await prisma.eventApplication.update({
        where: {
          id: eventApplicationFirst!.eventApplicationFirstId,
        },
        data: {
          status: EventApplicationStatus.PAIRED,
        },
      });

      console.log(
        'DDDDDDDDDDDDDDD MEMBER 1',
        eventApplicationFirst!.applicationFirst.accountId,
      );
      console.log('DDDDDDDDDDDDDDD MEMBER 2', eventApplicationSecond.accountId);

      const chat = await prisma.chat.create({
        data: {
          members: {
            create: [
              {
                accountId: eventApplicationFirst!.applicationFirst.accountId,
              },
              {
                accountId: eventApplicationSecond.accountId,
              },
            ],
          },
          messages: {
            create: [],
          },
        },
      });

      return prisma.eventApplicationPair.update({
        where: {
          id: eventApplicationPairId,
        },
        data: {
          eventApplicationSecondId: eventApplicationSecond.id,
          chatId: chat.id,
        },
      });
    });

    const eventApplicationFirst =
      await this.prismaService.eventApplicationPair.findUnique({
        where: { id: eventApplicationPairId },
        include: {
          applicationFirst: true,
        },
      });

    const eventApplicationFirstAccountId =
      eventApplicationFirst!.applicationFirst.accountId;

    await this.notificationsService.createNotification(
      this.i18n.getTranslation(language)('notifications.paired.title'),
      eventApplicationFirstAccountId,
      `${this.i18n.getTranslation(language)(
        'notifications.paired.title',
      )} ${this.i18n.getTranslation(language)('notifications.description')} ${
        process.env.SECRET_SANTA_DOMAIN
      }/event?id=${eventId}`,
    );

    console.log('UPDATE result', result);
    return result;
  }

  async getEventApplicationPairByEventId(
    eventId: number,
  ): Promise<Array<EventApplicationPair> | null> {
    return this.prismaService.eventApplicationPair.findMany({
      where: { eventId },
    });
  }

  async getEventApplicationPairByEventAndAccount(
    eventId: number,
    accountId: number,
  ): Promise<EventApplicationPair | null> {
    return this.prismaService.eventApplicationPair.findFirst({
      where: {
        eventId,
        OR: [
          {
            applicationFirst: {
              accountId,
            },
          },
          {
            applicationSecond: {
              accountId,
            },
          },
        ],
      },
    });
  }

  async getEventApplicationPairById(
    id: number,
  ): Promise<EventApplicationPair | null> {
    return this.prismaService.eventApplicationPair.findUnique({
      where: { id },
    });
  }

  async getEventApplicationPairByChatId(
    chatId: number,
  ): Promise<EventApplicationPair | null> {
    return this.prismaService.eventApplicationPair.findFirst({
      where: { chatId },
    });
  }

  async getEventApplicationPairByEventApplicationId(
    eventApplicationId: number,
  ): Promise<EventApplicationPair | null> {
    return this.prismaService.eventApplicationPair.findFirst({
      where: {
        OR: [
          {
            eventApplicationFirstId: eventApplicationId,
          },
          {
            eventApplicationSecondId: eventApplicationId,
          },
        ],
      },
    });
  }
}
