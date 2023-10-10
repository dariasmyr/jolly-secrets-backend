import { Injectable } from '@nestjs/common';
import { EventApplicationPair } from '@prisma/client';

import {
  CreateApplicationPairInput,
  UpdateApplicationPairInput,
} from '@/app/event-application/event-application-pair/event-application-pair.resolver';
import { PrismaService } from '@/common/prisma/prisma.service';

@Injectable()
export class EventApplicationPairService {
  constructor(private readonly prismaService: PrismaService) {}

  async createEventApplicationPair(
    input: CreateApplicationPairInput,
  ): Promise<EventApplicationPair> {
    const { eventId, eventApplicationFirstId } = input;
    return this.prismaService.eventApplicationPair.create({
      data: {
        eventApplicationFirstId,
        eventId,
      },
    });
  }

  async updateEventApplicationPair(
    input: UpdateApplicationPairInput,
  ): Promise<EventApplicationPair | undefined> {
    const {
      eventId,
      eventApplicationFirstId,
      eventApplicationSecondId,
      chatId,
    } = input;
    const eventApplicationPair =
      await this.prismaService.eventApplicationPair.findFirst({
        where: {
          eventApplicationFirstId,
          eventId,
        },
      });

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

  async getEventApplicationPairByEventId(
    eventId: number,
  ): Promise<Array<EventApplicationPair> | null> {
    return this.prismaService.eventApplicationPair.findMany({
      where: { eventId },
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

  async getEventApplicationWithoutPairByEventId(
    eventId: number,
  ): Promise<EventApplicationPair | null> {
    return this.prismaService.eventApplicationPair.findFirst({
      where: {
        eventId,
        // eslint-disable-next-line unicorn/no-null
        eventApplicationSecondId: null,
      },
    });
  }
}
