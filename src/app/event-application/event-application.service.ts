import { Injectable } from '@nestjs/common';
import {
  EventApplication,
  EventApplicationStatus,
  Notification,
} from '@prisma/client';
import { I18nService } from 'nestjs-i18n';

import { CreateEventApplicationInput } from '@/app/event-application/event-application.resolver';
import { EventApplicationPairService } from '@/app/event-application/event-application-pair/event-application-pair.service';
import { PrismaService } from '@/common/prisma/prisma.service';

@Injectable()
export class EventApplicationService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly eventApplicationPairService: EventApplicationPairService,
    private i18n: I18nService,
  ) {}

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
    const result = await this.prismaService.eventApplication.update({
      where: { id: eventApplicationId },
      data: {
        status,
      },
    });

    const eventApplicationPair =
      await this.eventApplicationPairService.getEventApplicationPairByEventApplicationId(
        eventApplicationId,
      );

    await this.createNotification(
      'Статус заявки обновлен',
      result.accountId,
      `Ваша заявка из события ${eventApplicationPair?.eventId} только что была обновлена. Проверьте ее статус!`,
    );

    return result;
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
