import { Injectable } from '@nestjs/common';
import { EventApplication, EventApplicationStatus } from '@prisma/client';

import { PrismaService } from '@/common/prisma/prisma.service';

@Injectable()
export class EventApplicationService {
  constructor(private readonly prismaService: PrismaService) {}

  async createEventApplication(
    eventId: number,
    accountId: number,
  ): Promise<EventApplication> {
    return this.prismaService.eventApplication.create({
      data: {
        accountId,
        status: EventApplicationStatus.LOOKING_FOR_PAIR,
      },
    });
  }
}
