import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Resolver } from '@nestjs/graphql';

import { Event } from '@/@generated/nestgraphql/event/event.model';
import { EventApplication } from '@/@generated/nestgraphql/event-application/event-application.model';
import { Preference } from '@/@generated/nestgraphql/preference/preference.model';
import { EventApplicationStatus } from '@/@generated/nestgraphql/prisma/event-application-status.enum';
import { AuthGuard } from '@/app/auth/auth-guard/auth.guard';
import { RequestContext } from '@/app/auth/request-context-extractor/interfaces';
import { RequestContextDecorator } from '@/app/request-context.decorator';

import { EventApplicationService } from './event-application.service';

@Resolver()
export class EventApplicationResolver {
  constructor(
    private readonly eventApplicationService: EventApplicationService,
  ) {}

  @Mutation(() => Event, { name: 'createEventApplication' })
  @UseGuards(AuthGuard)
  async createEventApplication(
    @RequestContextDecorator() context: RequestContext,
  ): Promise<EventApplication | null> {
    return this.eventApplicationService.createEventApplication(
      context.account!.id,
    );
  }

  @Mutation(() => Event, { name: 'addPreferencesToEventApplication' })
  @UseGuards(AuthGuard)
  async addPreferencesToEventApplication(
    @Args('preferences') preferences: Preference[],
    @Args('eventApplicationId') eventApplicationId: number,
  ): Promise<EventApplication | null> {
    return this.eventApplicationService.addPreferencesToEventApplication(
      eventApplicationId,
      preferences,
    );
  }

  @Mutation(() => Event, { name: 'setEventApplicationStatus' })
  @UseGuards(AuthGuard)
  async setEventApplicationStatus(
    @Args('eventApplicationId') eventApplicationId: number,
    @Args('status') status: EventApplicationStatus,
  ): Promise<EventApplication | null> {
    return this.eventApplicationService.setEventApplicationStatus(
      eventApplicationId,
      status,
    );
  }
}
