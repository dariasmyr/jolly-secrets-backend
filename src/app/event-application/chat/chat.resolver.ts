import * as console from 'node:console';

import { UseGuards } from '@nestjs/common';
import {
  Args,
  Int,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { I18nService } from 'nestjs-i18n';

import { Chat } from '@/@generated/nestgraphql/chat/chat.model';
import { ChatMember } from '@/@generated/nestgraphql/chat-member/chat-member.model';
import { EventApplicationPair } from '@/@generated/nestgraphql/event-application-pair/event-application-pair.model';
import { Message } from '@/@generated/nestgraphql/message/message.model';
import { RequestContext } from '@/app/auth/request-context-extractor/interfaces';
import { ChatService } from '@/app/event-application/chat/chat.service';
import { ChatMemberService } from '@/app/event-application/chat-member/chat-member.service';
import { EventApplicationService } from '@/app/event-application/event-application.service';
import { EventApplicationPairService } from '@/app/event-application/event-application-pair/event-application-pair.service';
import { MessageService } from '@/app/event-application/message/message.service';
import { RequestContextDecorator } from '@/app/request-context.decorator';
import { AuthGuard } from '@/common/logger-serve/auth/auth.guard';

@Resolver(() => Chat)
export class ChatResolver {
  constructor(
    private readonly chatService: ChatService,
    private readonly chatMember: ChatMemberService,
    private readonly messageService: MessageService,
    private readonly eventApplicationPairService: EventApplicationPairService,
    private readonly eventApplicationService: EventApplicationService,
    private i18n: I18nService,
  ) {}

  private async authorize(accountId: number, chatId: number): Promise<void> {
    const eventApplicationPair =
      await this.eventApplicationPairService.getEventApplicationPairByChatId(
        chatId,
      );
    if (!eventApplicationPair) {
      throw new Error(this.i18n.t('errors.notFound'));
    }

    const applications =
      await this.eventApplicationService.getEventApplicationByAccountId(
        accountId,
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

    console.log('isApplicationOwner', isApplicationOwner);

    if (!isApplicationOwner) {
      throw new Error(this.i18n.t('errors.unauthorized'));
    }
  }

  @Query(() => Chat, { name: 'chat' })
  @UseGuards(AuthGuard)
  async chat(
    @Args('id', { type: () => Int }) chatId: number,
    @RequestContextDecorator() context: RequestContext,
  ): Promise<Chat | null> {
    await this.authorize(context.account!.id, chatId);
    return this.chatService.getChatById(chatId);
  }

  @ResolveField(() => [EventApplicationPair], { name: 'eventApplicationPair' })
  @UseGuards(AuthGuard)
  async eventApplicationPair(
    @Parent() chat: Chat,
    @RequestContextDecorator() context: RequestContext,
  ): Promise<Array<EventApplicationPair>> {
    await this.authorize(context.account!.id, chat.id);
    const result =
      await this.eventApplicationPairService.getEventApplicationPairByChatId(
        chat.id,
      );
    if (!result) {
      throw new Error(this.i18n.t('errors.notFound'));
    }
    return [result];
  }

  @ResolveField(() => [ChatMember], { name: 'chatMembers' })
  @UseGuards(AuthGuard)
  async chatMembers(
    @Parent() chat: Chat,
    @RequestContextDecorator() context: RequestContext,
  ): Promise<Array<ChatMember> | null> {
    await this.authorize(context.account!.id, chat.id);
    return this.chatMember.getChatMemberByChatId(chat.id);
  }

  @ResolveField(() => [Message], { name: 'messages' })
  @UseGuards(AuthGuard)
  async messages(
    @Parent() chat: Chat,
    @RequestContextDecorator() context: RequestContext,
  ): Promise<Array<Message> | null> {
    await this.authorize(context.account!.id, chat.id);
    return this.messageService.getMessageByChatId(chat.id);
  }
}
