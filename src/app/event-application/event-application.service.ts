import { Injectable } from '@nestjs/common';
import { EventApplication, EventApplicationStatus } from '@prisma/client';

import { CreateEventApplicationInput } from '@/app/event-application/event-application.resolver';
import { EventApplicationPairService } from '@/app/event-application/event-application-pair/event-application-pair.service';
import { PrismaService } from '@/common/prisma/prisma.service';

@Injectable()
export class EventApplicationService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly eventApplicationPairService: EventApplicationPairService,
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
    return this.prismaService.eventApplication.update({
      where: { id: eventApplicationId },
      data: {
        status,
      },
    });
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
