import { UseGuards } from '@nestjs/common';
import {
  Args,
  Field,
  InputType,
  Int,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { Group } from '@prisma/client';
import { I18nService } from 'nestjs-i18n';

import { Event } from '@/@generated/nestgraphql/event/event.model';
import { EventApplicationPair } from '@/@generated/nestgraphql/event-application-pair/event-application-pair.model';
import { AuthGuard } from '@/app/auth/auth-guard/auth.guard';
import { RequestContext } from '@/app/auth/request-context-extractor/interfaces';
import { EventApplicationPairService } from '@/app/event-application/event-application-pair/event-application-pair.service';
import { GroupService } from '@/app/group/group.service';
import { RequestContextDecorator } from '@/app/request-context.decorator';

import { EventService } from './event.service';

@InputType()
export class CreateEventInput {
  @Field(() => Int)
  groupId: number;

  @Field()
  name: string;

  @Field()
  description: string;

  @Field()
  startsAt: Date;

  @Field()
  endsAt: Date;
}

@Resolver(() => Event)
export class EventResolver {
  constructor(
    private readonly eventService: EventService,
    private readonly groupService: GroupService,
    private readonly eventApplicationPairService: EventApplicationPairService,
    private i18n: I18nService,
  ) {}

  private async checkGroupMembership(
    accountId: number,
    groupId: number,
  ): Promise<void> {
    const isMember = await this.groupService.ifAccountMemberOfGroup(
      accountId,
      groupId,
    );

    if (!isMember) {
      throw new Error(this.i18n.t('errors.unauthorized'));
    }
  }

  @Query(() => [Event], { name: 'events' })
  @UseGuards(AuthGuard)
  async events(
    @Args('groupId', { type: () => Int }) groupId: number,
    @RequestContextDecorator() context: RequestContext,
  ): Promise<Array<Event> | null> {
    await this.checkGroupMembership(context.account!.id, groupId);
    return this.eventService.getEventsByGroupId(groupId);
  }

  @Query(() => Event, { name: 'event' })
  @UseGuards(AuthGuard)
  async event(
    @Args('id', { type: () => Int }) id: number,
    @RequestContextDecorator() context: RequestContext,
  ): Promise<Event | null> {
    const group = await this.groupService.getGroupByEventId(id);
    if (!group) {
      // eslint-disable-next-line sonarjs/no-duplicate-string
      throw new Error(this.i18n.t('errors.notFound'));
    }
    await this.checkGroupMembership(context.account!.id, group.id);
    return this.eventService.getEventById(id);
  }

  @Mutation(() => Event, { name: 'createEvent' })
  @UseGuards(AuthGuard)
  async createEvent(
    @Args('input') input: CreateEventInput,
    @RequestContextDecorator() context: RequestContext,
  ): Promise<Event> {
    await this.checkGroupMembership(context.account!.id, input.groupId);
    return this.eventService.createEvent(input);
  }

  @Mutation(() => Boolean, { name: 'deleteEvent' })
  @UseGuards(AuthGuard)
  async deleteEvent(
    @Args('id') id: number,
    @RequestContextDecorator() context: RequestContext,
  ): Promise<Event> {
    const group = await this.groupService.getGroupByEventId(id);
    if (!group) {
      throw new Error(this.i18n.t('errors.notFound'));
    }
    await this.checkGroupMembership(context.account!.id, group.id);
    const isDeletable = await this.eventService.isEventDeletable(id);
    if (isDeletable) {
      return await this.eventService.deleteEvent(id);
    } else {
      throw new Error('Event is not deletable');
    }
  }

  @ResolveField(() => [Event], { name: 'group' })
  @UseGuards(AuthGuard)
  async group(
    @RequestContextDecorator() context: RequestContext,
    @Parent() event: Event,
  ): Promise<Group | null> {
    const group = await this.groupService.getGroupByEventId(event.groupId);
    if (!group) {
      throw new Error(this.i18n.t('errors.notFound'));
    }
    await this.checkGroupMembership(context.account!.id, group.id);
    return this.groupService.getGroupByAccountId(
      context.account!.id,
      event.groupId,
    );
  }

  @ResolveField(() => [EventApplicationPair], { name: 'eventApplicationPairs' })
  @UseGuards(AuthGuard)
  async eventApplicationPairs(
    @RequestContextDecorator() context: RequestContext,
    @Parent() event: Event,
  ): Promise<Array<EventApplicationPair> | null> {
    const group = await this.groupService.getGroupByEventId(event.groupId);
    if (!group) {
      throw new Error(this.i18n.t('errors.notFound'));
    }
    await this.checkGroupMembership(context.account!.id, group.id);
    return this.eventApplicationPairService.getEventApplicationPairByEventId(
      event.id,
    );
  }
}
