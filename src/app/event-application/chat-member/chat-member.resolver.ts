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
import { I18nService } from 'nestjs-i18n';

import { Account } from '@/@generated/nestgraphql/account/account.model';
import { Chat } from '@/@generated/nestgraphql/chat/chat.model';
import { ChatMember } from '@/@generated/nestgraphql/chat-member/chat-member.model';
import { ChatMemberRole } from '@/@generated/nestgraphql/prisma/chat-member-role.enum';
import { AccountService } from '@/app/account/account.service';
import { RequestContext } from '@/app/auth/request-context-extractor/interfaces';
import { ChatService } from '@/app/event-application/chat/chat.service';
import { ChatMemberService } from '@/app/event-application/chat-member/chat-member.service';
import { RequestContextDecorator } from '@/app/request-context.decorator';
@InputType()
export class CreateChatMemberInput {
  @Field()
  accountId: number;

  @Field()
  chatId: number;

  @Field()
  role: ChatMemberRole;
}

@Resolver(() => ChatMember)
export class ChatMemberResolver {
  constructor(
    private readonly accountService: AccountService,
    private readonly chatService: ChatService,
    private readonly chatMemberService: ChatMemberService,
    private i18n: I18nService,
  ) {}

  @Query(() => [ChatMember], { name: 'chatMembers' })
  async chatMembers(
    @Args('chatId') chatId: number,
    @RequestContextDecorator() context: RequestContext,
  ): Promise<Array<ChatMember> | null> {
    const chatMembers =
      await this.chatMemberService.getChatMemberByChatId(chatId);
    if (!chatMembers) {
      throw new Error(this.i18n.t('errors.notFound'));
    }
    for (const chatMember of chatMembers) {
      if (chatMember.accountId === context.account?.id) {
        return this.chatMemberService.getChatMemberByChatId(chatId);
      }
    }
    return this.chatMemberService.getChatMemberByChatId(chatId);
  }

  @Mutation(() => ChatMember, { name: 'createChatMember' })
  async createChatMember(
    @Args('input') input: CreateChatMemberInput,
    @RequestContextDecorator() context: RequestContext,
  ): Promise<ChatMember | null> {
    if (input.accountId === context.account?.id) {
      // eslint-disable-next-line sonarjs/no-duplicate-string
      throw new Error(this.i18n.t('errors.unauthorized'));
    }
    return this.chatMemberService.createChatMember(input);
  }

  @ResolveField(() => Chat, { name: 'chat' })
  async chat(
    @Parent() chatMember: ChatMember,
    @RequestContextDecorator() context: RequestContext,
  ): Promise<Chat | null> {
    if (chatMember.accountId !== context.account?.id) {
      throw new Error(this.i18n.t('errors.unauthorized'));
    }
    return this.chatService.getChatById(chatMember.chatId!);
  }

  @ResolveField(() => Account, { name: 'account' })
  async account(
    @Parent() chatMember: ChatMember,
    @RequestContextDecorator() context: RequestContext,
  ): Promise<Account | null> {
    if (chatMember.accountId !== context.account?.id) {
      throw new Error(this.i18n.t('errors.unauthorized'));
    }
    return this.accountService.getAccountByChatMemberId(chatMember.id!);
  }
}
