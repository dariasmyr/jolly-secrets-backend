import { UseGuards } from '@nestjs/common';
import {
  Args,
  Field,
  InputType,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';

import { Event } from '@/@generated/nestgraphql/event/event.model';
import { EventApplication } from '@/@generated/nestgraphql/event-application/event-application.model';
import { EventApplicationPair } from '@/@generated/nestgraphql/event-application-pair/event-application-pair.model';
import { AuthGuard } from '@/app/auth/auth-guard/auth.guard';
import { EventService } from '@/app/event/event.service';
import { EventApplicationService } from '@/app/event-application/event-application.service';
import { EventApplicationPairService } from '@/app/event-application/event-application-pair/event-application-pair.service';

@InputType()
export class CreateApplicationPairInput {
  @Field()
  eventId: number;

  @Field()
  eventApplicationFirstId: number;
}

@InputType()
export class UpdateApplicationPairInput {
  @Field()
  eventId: number;

  @Field()
  eventApplicationFirstId: number;

  @Field()
  eventApplicationSecondId: number;

  @Field()
  chatId: number;
}

@Resolver()
export class EventApplicationPairResolver {
  constructor(
    private readonly eventService: EventService,
    private readonly eventApplicationService: EventApplicationService,
    private readonly eventApplicationPairService: EventApplicationPairService,
  ) {}

  @Query(() => [EventApplicationPair], { name: 'eventApplicationPairs' })
  @UseGuards(AuthGuard)
  async eventApplicationPairs(
    @Args('eventId') eventId: number,
  ): Promise<Array<EventApplicationPair> | null> {
    return this.eventApplicationPairService.getEventApplicationPairByEventId(
      eventId,
    );
  }

  @Query(() => EventApplicationPair, { name: 'eventApplicationPair' })
  @UseGuards(AuthGuard)
  async eventApplicationPair(
    @Args('id') id: number,
  ): Promise<EventApplicationPair | null> {
    return this.eventApplicationPairService.getEventApplicationPairById(id);
  }

  @Query(() => EventApplicationPair, {
    name: 'getEventApplicationPairWithoutPairByEventId',
  })
  @UseGuards(AuthGuard)
  async getEventApplicationPairWithoutPairByEventId(
    @Args('eventId') eventId: number,
  ): Promise<EventApplicationPair | null> {
    return this.eventApplicationPairService.getEventApplicationWithoutPairByEventId(
      eventId,
    );
  }

  @Mutation(() => EventApplicationPair, {
    name: 'createEventApplicationPair',
  })
  @UseGuards(AuthGuard)
  async createEventApplicationPair(
    @Args('input') input: CreateApplicationPairInput,
  ): Promise<EventApplicationPair> {
    return this.eventApplicationPairService.createEventApplicationPair(input);
  }

  @Mutation(() => EventApplicationPair, {
    name: 'updateEventApplicationPair',
  })
  @UseGuards(AuthGuard)
  async updateEventApplicationPair(
    @Args('input') input: UpdateApplicationPairInput,
  ): Promise<EventApplicationPair | undefined> {
    return this.eventApplicationPairService.updateEventApplicationPair(input);
  }

  @ResolveField(() => EventApplication, { name: 'eventApplicationFirst' })
  @UseGuards(AuthGuard)
  async eventApplicationFirst(
    @Parent() eventApplicationPair: EventApplicationPair,
  ): Promise<EventApplication | null> {
    const applicationFirst =
      await this.eventApplicationService.getEventApplicationById(
        eventApplicationPair.eventApplicationFirstId,
      );
    // eslint-disable-next-line unicorn/no-null
    return applicationFirst ?? null;
  }

  async eventApplicationSecond(
    @Parent() eventApplicationPair: EventApplicationPair,
  ): Promise<EventApplication | null> {
    const applicationSecond =
      await this.eventApplicationService.getEventApplicationById(
        eventApplicationPair.eventApplicationSecondId!,
      );
    // eslint-disable-next-line unicorn/no-null
    return applicationSecond ?? null;
  }

  @ResolveField(() => Event, { name: 'event' })
  @UseGuards(AuthGuard)
  async event(
    @Parent() eventApplicationPair: EventApplicationPair,
  ): Promise<Event | null> {
    return this.eventService.getEventById(eventApplicationPair.eventId);
  }
}
