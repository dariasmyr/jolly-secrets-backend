import * as console from 'node:console';

import { UseGuards } from '@nestjs/common';
import {
  Args,
  Field,
  InputType,
  Int,
  Mutation,
  Parent,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { I18nService } from 'nestjs-i18n';

import { Event } from '@/@generated/nestgraphql/event/event.model';
import { EventApplication } from '@/@generated/nestgraphql/event-application/event-application.model';
import { Preference } from '@/@generated/nestgraphql/preference/preference.model';
import { EventApplicationStatus } from '@/@generated/nestgraphql/prisma/event-application-status.enum';
import { AuthGuard } from '@/app/auth/auth-guard/auth.guard';
import { RequestContext } from '@/app/auth/request-context-extractor/interfaces';
import { CreatePreferenceInput } from '@/app/event-application/preference/preference.resolver';
import { PreferenceService } from '@/app/event-application/preference/preference.service';
import { RequestContextDecorator } from '@/app/request-context.decorator';

import { EventApplicationService } from './event-application.service';

@InputType()
export class CreateEventApplicationInput {
  @Field(() => Int)
  accountId: number;

  @Field(() => Int)
  eventId: number;

  @Field(() => [CreatePreferenceInput])
  preferences: CreatePreferenceInput[];
}

@Resolver(() => EventApplication)
export class EventApplicationResolver {
  constructor(
    private readonly eventApplicationService: EventApplicationService,
    private readonly preferenceService: PreferenceService,
    private i18n: I18nService,
  ) {}

  @Mutation(() => Event, { name: 'createEventApplication' })
  @UseGuards(AuthGuard)
  async createEventApplication(
    @Args('input') input: CreateEventApplicationInput,
    @RequestContextDecorator() context: RequestContext,
  ): Promise<EventApplication | null> {
    if (context.account?.id !== input.accountId) {
      // eslint-disable-next-line sonarjs/no-duplicate-string
      throw new Error(this.i18n.t('errors.unauthorized'));
    }

    return this.eventApplicationService.createEventApplication(input);
  }

  @Mutation(() => EventApplication, { name: 'setEventApplicationStatus' })
  @UseGuards(AuthGuard)
  async setEventApplicationStatus(
    @Args('eventApplicationId', { type: () => Int }) eventApplicationId: number,
    @Args('status', { type: () => EventApplicationStatus })
    status: EventApplicationStatus,
    @RequestContextDecorator() context: RequestContext,
  ): Promise<EventApplication | null> {
    const eventApplication =
      await this.eventApplicationService.getEventApplicationById(
        eventApplicationId,
      );
    console.log(eventApplication);
    if (!eventApplication) {
      // eslint-disable-next-line sonarjs/no-duplicate-string
      throw new Error(this.i18n.t('errors.notFound'));
    }

    if (context.account?.id !== eventApplication.accountId) {
      // eslint-disable-next-line sonarjs/no-duplicate-string
      throw new Error(this.i18n.t('errors.unauthorized'));
    }
    return this.eventApplicationService.setEventApplicationStatus(
      eventApplicationId,
      status,
    );
  }

  @ResolveField(() => [Preference], { name: 'preferences' })
  @UseGuards(AuthGuard)
  async preferences(
    @Parent() eventApplication: EventApplication,
  ): Promise<Preference[] | null> {
    return this.preferenceService.getPreferencesByApplicationId(
      eventApplication.id,
    );
  }
}
