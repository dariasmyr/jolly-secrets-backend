import { Injectable } from '@nestjs/common';
import {
  EventApplication,
  EventApplicationStatus,
  PriceRange,
} from '@prisma/client';

import { PrismaService } from '@/common/prisma/prisma.service';

@Injectable()
export class EventApplicationService {
  constructor(private readonly prismaService: PrismaService) {}

  async createEventApplication(accountId: number): Promise<EventApplication> {
    return this.prismaService.eventApplication.create({
      data: {
        accountId,
        status: EventApplicationStatus.LOOKING_FOR_PAIR,
      },
    });
  }

  async addPreferencesToEventApplication(
    eventApplicationId: number,
    preferenceIds: number[],
  ): Promise<EventApplication> {
    return this.prismaService.eventApplication.update({
      where: { id: eventApplicationId },
      data: {
        preferences: {
          connect: preferenceIds.map((id) => ({ id })),
        },
      },
    });
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

  async findEventApplicationByCommonPriceRange(
    priceRange: PriceRange,
    eventId: number,
  ): Promise<EventApplication | null> {
    return this.prismaService.eventApplication.findFirst({
      where: {
        preferences: {
          some: {
            priceRange,
          },
        },
        status: EventApplicationStatus.LOOKING_FOR_PAIR,
        eventApplicationFirstPairs: {
          some: {
            eventId,
          },
        },
      },
    });
  }
}
