import { UseGuards } from '@nestjs/common';
import { Args, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';

import { Chat } from '@/@generated/nestgraphql/chat/chat.model';
import { ChatMember } from '@/@generated/nestgraphql/chat-member/chat-member.model';
import { EventApplicationPair } from '@/@generated/nestgraphql/event-application-pair/event-application-pair.model';
import { Message } from '@/@generated/nestgraphql/message/message.model';
import { ChatService } from '@/app/event-application/chat/chat.service';
import { ChatMemberService } from '@/app/event-application/chat-member/chat-member.service';
import { EventApplicationPairService } from '@/app/event-application/event-application-pair/event-application-pair.service';
import { MessageService } from '@/app/event-application/message/message.service';
import { AuthGuard } from '@/common/logger-serve/auth/auth.guard';

@Resolver()
export class ChatResolver {
  constructor(
    private readonly chatService: ChatService,
    private readonly chatMember: ChatMemberService,
    private readonly messageService: MessageService,
    private readonly eventApplicationPairService: EventApplicationPairService,
  ) {}

  @Query(() => [Chat], { name: 'chat' })
  @UseGuards(AuthGuard)
  async chat(@Args('id') eventId: number): Promise<Chat | null> {
    return this.chatService.getChatById(eventId);
  }

  @ResolveField(() => EventApplicationPair, { name: 'eventApplicationPair' })
  @UseGuards(AuthGuard)
  async eventApplicationPair(
    @Parent() chat: Chat,
  ): Promise<EventApplicationPair | null> {
    return this.eventApplicationPairService.getEventApplicationPairByChatId(
      chat.id,
    );
  }

  @ResolveField(() => [ChatMember], { name: 'chatMembers' })
  @UseGuards(AuthGuard)
  async chatMembers(@Parent() chat: Chat): Promise<Array<ChatMember> | null> {
    return this.chatMember.getChatMemberByChatId(chat.id);
  }

  @ResolveField(() => [Message], { name: 'messages' })
  @UseGuards(AuthGuard)
  async messages(@Parent() chat: Chat): Promise<Array<Message> | null> {
    return this.messageService.getMessageByChatId(chat.id);
  }
}
