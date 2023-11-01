import { Injectable } from '@nestjs/common';
import { EventStatus } from '@prisma/client';

import { Event } from '@/@generated/nestgraphql/event/event.model';
import { CreateEventInput } from '@/app/event/event.resolver';
import { PrismaService } from '@/common/prisma/prisma.service';

@Injectable()
export class EventService {
  constructor(private readonly prismaService: PrismaService) {}

  async createEvent(input: CreateEventInput): Promise<Event> {
    if (input.endsAt <= input.startsAt) {
      throw new Error('End date must be later than start date');
    }

    return this.prismaService.event.create({
      data: {
        pictureUrl:
          'https://th-thumbnailer.cdn-si-edu.com/bgmkh2ypz03IkiRR50I-UMaqUQc=/1000x750/filters:no_upscale():focal(1061x707:1062x708)/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer_public/55/95/55958815-3a8a-4032-ac7a-ff8c8ec8898a/gettyimages-1067956982.jpg',
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
