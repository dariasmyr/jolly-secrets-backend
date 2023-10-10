import { Injectable } from '@nestjs/common';
import { EventStatus } from '@prisma/client';

import { Event } from '@/@generated/nestgraphql/event/event.model';
import { CreateEventInput } from '@/app/event/event.resolver';
import { PrismaService } from '@/common/prisma/prisma.service';

@Injectable()
export class EventService {
  constructor(private readonly prismaService: PrismaService) {}

  async createEvent(input: CreateEventInput): Promise<Event> {
    return this.prismaService.event.create({
      data: {
        pictureUrl: 'images/rainbow-vortex.png',
        status: EventStatus.OPEN,
        groupId: input.groupId,
        name: input.name,
        description: input.description,
        startsAt: input.startsAt,
        endsAt: input.endsAt,
      },
    });
  }

  async getEventById(id: number): Promise<Event | null> {
    return this.prismaService.event.findUnique({
      where: {
        id,
      },
    });
  }

  async getEventsByGroupId(groupId: number): Promise<Array<Event> | null> {
    return this.prismaService.event.findMany({
      where: {
        groupId,
      },
    });
  }

  async isEventDeletable(id: number): Promise<boolean> {
    const eventApplicationPairs =
      await this.prismaService.eventApplicationPair.findMany({
        where: {
          eventId: id,
        },
      });

    if (eventApplicationPairs.length > 0) {
      for (const pair of eventApplicationPairs) {
        const hasValidApplications =
          (await this.checkApplication(pair.eventApplicationFirstId)) &&
          (await this.checkApplication(pair.eventApplicationSecondId!));

        if (!hasValidApplications) return false;
      }
    } else {
      return false;
    }

    return true;
  }

  async checkApplication(applicationId: number): Promise<boolean> {
    const application = await this.prismaService.eventApplication.findUnique({
      where: { id: applicationId },
    });

    return !(
      !application ||
      (application.status !== 'GIFT_RECEIVED' &&
        application.status !== 'GIFT_NOT_RECEIVED')
    );
  }

  async deleteEvent(id: number): Promise<Event> {
    return this.prismaService.event.delete({
      where: {
        id,
      },
    });
  }

  async getEventsByApplicationPairId(
    applicationPairId: number,
  ): Promise<Array<Event> | null> {
    return this.prismaService.event.findMany({
      where: {
        applicationPairs: {
          some: {
            id: applicationPairId,
          },
        },
      },
    });
  }

  async isEventExpired(id: number): Promise<boolean> {
    const event = await this.prismaService.event.findUnique({
      where: {
        id,
      },
    });

    if (!event) return false;

    const now = new Date();
    const eventEndsAt = new Date(event.endsAt);

    return now > eventEndsAt;
  }
}
