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
    eventId: number,
    eventApplicationFirstId: number,
    eventApplicationSecondId: number,
    chatId: number,
  ): Promise<EventApplicationPair> {
    return this.prismaService.eventApplicationPair.create({
      data: {
        eventId,
        eventApplicationFirstId,
        eventApplicationSecondId,
        chatId,
      },
    });
  }
}
