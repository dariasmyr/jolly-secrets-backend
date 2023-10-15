import { UseGuards } from '@nestjs/common';
import { Args, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { I18nService } from 'nestjs-i18n';

import { Chat } from '@/@generated/nestgraphql/chat/chat.model';
import { Event } from '@/@generated/nestgraphql/event/event.model';
import { EventApplication } from '@/@generated/nestgraphql/event-application/event-application.model';
import { EventApplicationPair } from '@/@generated/nestgraphql/event-application-pair/event-application-pair.model';
import { AuthGuard } from '@/app/auth/auth-guard/auth.guard';
import { RequestContext } from '@/app/auth/request-context-extractor/interfaces';
import { EventService } from '@/app/event/event.service';
import { ChatService } from '@/app/event-application/chat/chat.service';
import { EventApplicationService } from '@/app/event-application/event-application.service';
import { EventApplicationPairService } from '@/app/event-application/event-application-pair/event-application-pair.service';
import { GroupService } from '@/app/group/group.service';
import { RequestContextDecorator } from '@/app/request-context.decorator';

@Resolver(() => EventApplicationPair)
export class EventApplicationPairResolver {
  constructor(
    private readonly eventService: EventService,
    private readonly eventApplicationService: EventApplicationService,
    private readonly eventApplicationPairService: EventApplicationPairService,
    private readonly chatService: ChatService,
    private readonly groupService: GroupService,
    private i18n: I18nService,
  ) {}

  private async authorize(
    context: RequestContext,
    eventApplicationPair: EventApplicationPair,
  ): Promise<void> {
    const applications =
      await this.eventApplicationService.getEventApplicationByAccountId(
        context.account!.id,
      );

    if (!applications) {
      // eslint-disable-next-line sonarjs/no-duplicate-string
      throw new Error(this.i18n.t('errors.unauthorized'));
    }

    const isApplicationOwner = applications.some(
      (application) =>
        application.id === eventApplicationPair.eventApplicationFirstId ||
        application.id === eventApplicationPair.eventApplicationSecondId,
    );

    if (!isApplicationOwner) {
      throw new Error(this.i18n.t('errors.unauthorized'));
    }
  }

  @Query(() => [EventApplicationPair], { name: 'eventApplicationPairs' })
  @UseGuards(AuthGuard)
  async eventApplicationPairs(
    @Args('eventId') eventId: number,
    @RequestContextDecorator() context: RequestContext,
  ): Promise<Array<EventApplicationPair> | null> {
    const group = await this.groupService.getGroupByEventId(eventId);
    if (!group)
      // eslint-disable-next-line sonarjs/no-duplicate-string
      throw new Error(this.i18n.t('errors.unauthorized'));

    const isAdmin = await this.groupService.ifAccountAdminOfGroup(
      context.account!.id,
      group.id,
    );
    if (!isAdmin)
      // eslint-disable-next-line sonarjs/no-duplicate-string
      throw new Error(this.i18n.t('errors.unauthorized'));

    return this.eventApplicationPairService.getEventApplicationPairByEventId(
      eventId,
    );
  }

  @Query(() => EventApplicationPair, { name: 'eventApplicationPair' })
  @UseGuards(AuthGuard)
  async eventApplicationPair(
    @Args('id') id: number,
    @RequestContextDecorator() context: RequestContext,
  ): Promise<EventApplicationPair | null> {
    const applications =
      await this.eventApplicationService.getEventApplicationByAccountId(
        context.account!.id,
      );
    if (!applications)
      // eslint-disable-next-line sonarjs/no-duplicate-string
      throw new Error(this.i18n.t('errors.unauthorized'));

    const eventApplicationPair =
      await this.eventApplicationPairService.getEventApplicationPairById(id);
    if (!eventApplicationPair)
      // eslint-disable-next-line sonarjs/no-duplicate-string
      throw new Error(this.i18n.t('errors.unauthorized'));

    const isApplicationOwner = applications.some(
      (application) =>
        application.id === eventApplicationPair.eventApplicationFirstId ||
        application.id === eventApplicationPair.eventApplicationSecondId,
    );

    if (!isApplicationOwner)
      // eslint-disable-next-line sonarjs/no-duplicate-string
      throw new Error(this.i18n.t('errors.unauthorized'));

    return this.eventApplicationPairService.getEventApplicationPairById(id);
  }

  @ResolveField(() => EventApplication, { name: 'eventApplicationFirst' })
  @UseGuards(AuthGuard)
  async eventApplicationFirst(
    @RequestContextDecorator() context: RequestContext,
    @Parent() eventApplicationPair: EventApplicationPair,
  ): Promise<EventApplication | null> {
    await this.authorize(context, eventApplicationPair);
    const applicationFirst =
      await this.eventApplicationService.getEventApplicationById(
        eventApplicationPair.eventApplicationFirstId,
      );

    // eslint-disable-next-line unicorn/no-null
    return applicationFirst ?? null;
  }

  @ResolveField(() => EventApplication, { name: 'eventApplicationSecond' })
  @UseGuards(AuthGuard)
  async eventApplicationSecond(
    @RequestContextDecorator() context: RequestContext,
    @Parent() eventApplicationPair: EventApplicationPair,
  ): Promise<EventApplication | null> {
    await this.authorize(context, eventApplicationPair);
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
    @RequestContextDecorator() context: RequestContext,
    @Parent() eventApplicationPair: EventApplicationPair,
  ): Promise<Event | null> {
    await this.authorize(context, eventApplicationPair);
    return this.eventService.getEventById(eventApplicationPair.eventId);
  }

  @ResolveField(() => [Chat], { name: 'chats' })
  @UseGuards(AuthGuard)
  async chats(
    @RequestContextDecorator() context: RequestContext,
    @Parent() eventApplicationPair: EventApplicationPair,
  ): Promise<Chat | null> {
    await this.authorize(context, eventApplicationPair);
    return this.chatService.getChatByEventApplicationPairId(
      eventApplicationPair.id,
    );
  }
}
