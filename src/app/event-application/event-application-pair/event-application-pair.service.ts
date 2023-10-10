import { Injectable } from '@nestjs/common';
import { EventApplicationPair } from '@prisma/client';

import { PrismaService } from '@/common/prisma/prisma.service';

@Injectable()
export class EventApplicationPairService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly eventApplicationPairService: EventApplicationPairService,
  ) {}

  async createEventApplicationPair(
    eventApplicationFirstId: number,
    eventId: number,
  ): Promise<EventApplicationPair> {
    return this.prismaService.eventApplicationPair.create({
      data: {
        eventApplicationFirstId,
        eventId,
      },
    });
  }

  async updateEventApplicationPair(
    eventId: number,
    eventApplicationFirstId: number,
    eventApplicationSecondId: number,
    chatId: number,
  ): Promise<EventApplicationPair | undefined> {
    //find the eventApplicationPair by first eventApplicationId and eventId
    const eventApplicationPair =
      await this.prismaService.eventApplicationPair.findFirst({
        where: {
          eventApplicationFirstId,
          eventId,
        },
      });

    //if the eventApplicationPair is found, update it
    return eventApplicationPair
      ? this.prismaService.eventApplicationPair.update({
          where: { id: eventApplicationPair.id },
          data: {
            eventApplicationSecondId,
            chatId,
          },
        })
      : undefined;
  }
}
