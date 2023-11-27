import { Injectable } from '@nestjs/common';
import {
  EventApplicationPair,
  EventApplicationStatus,
  Notification,
} from '@prisma/client';

import { CreateEventApplicationInput } from '@/app/event-application/event-application.resolver';
import { CreatePreferenceInput } from '@/app/event-application/preference/preference.resolver';
import { PrismaService } from '@/common/prisma/prisma.service';

@Injectable()
export class EventApplicationPairService {
  constructor(private readonly prismaService: PrismaService) {}

  async createNotification(
    title: string,
    accountId: number,
    message: string,
  ): Promise<Notification> {
    return await this.prismaService.notification.create({
      data: {
        title: title,
        accountId: accountId,
        message: message,
      },
    });
  }

  async upsertEventApplicationPair(
    input: CreateEventApplicationInput,
  ): Promise<EventApplicationPair> {
    const suitableEventApplicationPair = await this.findSuitableApplicationPair(
      input.eventId,
      input.preferences,
    );

    return suitableEventApplicationPair
      ? this.updateEventApplicationPair(input, suitableEventApplicationPair.id)
      : this.createEventApplicationPair(input);
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
  ): Promise<EventApplicationPair> {
    const { accountId, eventId, preferences } = input;
    return this.prismaService.$transaction(async (prisma) => {
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
  }

  async updateEventApplicationPair(
    input: CreateEventApplicationInput,
    eventApplicationPairId: number,
  ): Promise<EventApplicationPair> {
    const { accountId, preferences } = input;
    return this.prismaService.$transaction(async (prisma) => {
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

      const chat = await prisma.chat.create({
        data: {
          members: {
            create: [
              {
                accountId,
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

      await this.createNotification(
        'Пара найдена!',
        eventApplicationFirst!.applicationFirst.accountId,
        `Ваша заявка из события ${
          eventApplicationFirst!.eventId
        } только что была обновлена. Проверьте ее статус!`,
      );

      await this.createNotification(
        'Пара найдена!',
        eventApplicationSecond.accountId,
        `Ваша заявка из события ${
          eventApplicationFirst!.eventId
        } только что была обновлена. Проверьте ее статус!`,
      );

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
