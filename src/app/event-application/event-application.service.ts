import { Injectable } from '@nestjs/common';
import { EventApplication, EventApplicationStatus } from '@prisma/client';
import { I18nService } from 'nestjs-i18n';

import { CreateEventApplicationInput } from '@/app/event-application/event-application.resolver';
import { EventApplicationPairService } from '@/app/event-application/event-application-pair/event-application-pair.service';
import { NotificationService } from '@/app/notification/notification.service';
import { PrismaService } from '@/common/prisma/prisma.service';

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
  ): Promise<EventApplication | null> {
    const result =
      await this.eventApplicationPairService.upsertEventApplicationPair(input);

    if (!result) {
      // eslint-disable-next-line unicorn/no-null
      return null;
    }

    const eventApplications = await this.getEventApplicationByAccountId(
      input.accountId,
    );

    if (eventApplications!.length === 0) {
      // eslint-disable-next-line unicorn/no-null
      return null;
    }

    const eventApplication = eventApplications!.find(
      (_eventApplication) =>
        _eventApplication.id === result.eventApplicationFirstId ||
        _eventApplication.id === result.eventApplicationSecondId,
    );
    // eslint-disable-next-line unicorn/no-null
    return eventApplication ?? null;
  }

  async setEventApplicationStatus(
    eventApplicationId: number,
    status: EventApplicationStatus,
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

    // eslint-disable-next-line default-case
    switch (status) {
      case EventApplicationStatus.GIFT_SENT: {
        await this.notificationsService.createNotification(
          this.i18n.t('notifications.gift_sent.title'),
          updatedApplication.accountId,
          // eslint-disable-next-line sonarjs/no-duplicate-string
          this.i18n.t('notifications.description', {
            args: {
              event,
            },
          }),
        );

        break;
      }
      case EventApplicationStatus.GIFT_RECEIVED: {
        await this.notificationsService.createNotification(
          this.i18n.t('notifications.gift_received.title'),
          partherEventApplicationId!,
          this.i18n.t('notifications.description', {
            args: {
              event,
            },
          }),
        );

        break;
      }
      case EventApplicationStatus.GIFT_NOT_RECEIVED: {
        await this.notificationsService.createNotification(
          this.i18n.t('notifications.gift_not_received.title'),
          partherEventApplicationId!,
          this.i18n.t('notifications.description', {
            args: {
              event,
            },
          }),
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
