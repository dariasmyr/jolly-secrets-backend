import * as console from 'node:console';

import { Injectable } from '@nestjs/common';
import { EventApplication, EventApplicationStatus } from '@prisma/client';

import { CreateEventApplicationInput } from '@/app/event-application/event-application.resolver';
import { EventApplicationPairService } from '@/app/event-application/event-application-pair/event-application-pair.service';
import { NotificationService } from '@/app/notification/notification.service';
import { PrismaService } from '@/common/prisma/prisma.service';
import { I18nService } from '@/i18n/i18n.service';

@Injectable()
export class EventApplicationService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly eventApplicationPairService: EventApplicationPairService,
    private readonly notificationsService: NotificationService,
    private i18n: I18nService,
  ) {}

  async createEventApplication(
    input: CreateEventApplicationInput,
    language: string,
  ): Promise<number | null> {
    const eventApplications =
      await this.prismaService.eventApplication.findMany({
        where: {
          OR: [
            {
              eventApplicationFirstPairs: {
                some: {
                  eventId: input.eventId,
                },
              },
            },
            {
              eventApplicationSecondPairs: {
                some: {
                  eventId: input.eventId,
                },
              },
            },
          ],
        },
      });

    console.log('eventApplications', eventApplications);

    const eventApplication = eventApplications.find(
      (_eventApplication) => _eventApplication.accountId === input.accountId,
    );

    if (eventApplication) {
      console.log('eventApplication', eventApplication);
      // eslint-disable-next-line unicorn/no-null
      return null;
    }

    const result =
      await this.eventApplicationPairService.upsertEventApplicationPair(
        input,
        language,
      );

    if (!result) {
      // eslint-disable-next-line unicorn/no-null
      return null;
    }

    return (
      // eslint-disable-next-line unicorn/no-null
      result.eventApplicationFirstId ?? result.eventApplicationSecondId ?? null
    );
  }

  async setEventApplicationStatus(
    eventApplicationId: number,
    status: EventApplicationStatus,
    language: string,
  ): Promise<EventApplication> {
    const updatedApplication = await this.prismaService.eventApplication.update(
      {
        where: { id: eventApplicationId },
        data: {
          status,
        },
      },
    );

    const eventApplicationPair =
      await this.eventApplicationPairService.getEventApplicationPairByEventApplicationId(
        eventApplicationId,
      );

    const event = await this.prismaService.event.findUnique({
      where: { id: eventApplicationPair!.eventId },
    });

    const partherEventApplicationId =
      eventApplicationPair!.eventApplicationFirstId === eventApplicationId
        ? eventApplicationPair!.eventApplicationSecondId
        : eventApplicationPair!.eventApplicationFirstId;

    const partherEventApplicationAccountId =
      (await this.prismaService.eventApplication.findUnique({
        where: { id: partherEventApplicationId! },
      }))!.accountId;

    // eslint-disable-next-line default-case
    switch (status) {
      case EventApplicationStatus.GIFT_SENT: {
        await this.notificationsService.createNotification(
          this.i18n.getTranslation(language)('notifications.gift_sent.title'),
          updatedApplication.accountId,
          `${this.i18n.getTranslation(language)(
            'notifications.gift_sent.title',
          )} ${this.i18n.getTranslation(language)(
            // eslint-disable-next-line sonarjs/no-duplicate-string
            'notifications.description',
          )} ${event?.name}`,
        );

        break;
      }
      case EventApplicationStatus.GIFT_RECEIVED: {
        await this.notificationsService.createNotification(
          this.i18n.getTranslation(language)(
            'notifications.gift_received.title',
          ),
          partherEventApplicationAccountId!,
          `${this.i18n.getTranslation(language)(
            'notifications.gift_received.title',
          )} ${this.i18n.getTranslation(language)(
            'notifications.description',
          )} ${event?.name}`,
        );

        break;
      }
      case EventApplicationStatus.GIFT_NOT_RECEIVED: {
        await this.notificationsService.createNotification(
          this.i18n.getTranslation(language)(
            'notifications.gift_not_received.title',
          ),
          partherEventApplicationAccountId!,
          `${this.i18n.getTranslation(language)(
            'notifications.gift_not_received.title',
          )} ${this.i18n.getTranslation(language)(
            'notifications.description',
          )} ${event?.name}`,
        );

        break;
      }
    }
    return updatedApplication;
  }

  async getEventApplicationById(
    eventApplicationId: number,
  ): Promise<EventApplication | null> {
    return this.prismaService.eventApplication.findUnique({
      where: { id: eventApplicationId },
    });
  }

  async getEventApplicationByAccountId(
    accountId: number,
  ): Promise<Array<EventApplication> | null> {
    return this.prismaService.eventApplication.findMany({
      where: { accountId },
    });
  }

  async getEventApplicationByPreferenceId(
    preferenceId: number,
  ): Promise<EventApplication | null> {
    return this.prismaService.eventApplication.findFirst({
      where: {
        preferences: {
          some: {
            id: preferenceId,
          },
        },
      },
    });
  }
}
