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
import { I18nService } from 'nestjs-i18n';

import { Account } from '@/@generated/nestgraphql/account/account.model';
import { Chat } from '@/@generated/nestgraphql/chat/chat.model';
import { Message } from '@/@generated/nestgraphql/message/message.model';
import { AccountService } from '@/app/account/account.service';
import { RequestContext } from '@/app/auth/request-context-extractor/interfaces';
import { ChatService } from '@/app/event-application/chat/chat.service';
import { ChatMemberService } from '@/app/event-application/chat-member/chat-member.service';
import { MessageService } from '@/app/event-application/message/message.service';
import { RequestContextDecorator } from '@/app/request-context.decorator';

@InputType()
export class CreateMessageInput {
  @Field()
  accountId: number;

  @Field()
  chatId: number;

  @Field()
  text: string;
}

@Resolver(() => Message)
export class MessageResolver {
  constructor(
    private readonly accountService: AccountService,
    private readonly chatService: ChatService,
    private readonly messageService: MessageService,
    private readonly chatMemberService: ChatMemberService,
    private i18n: I18nService,
  ) {}

  @Query(() => [Message], { name: 'messages' })
  async messages(
    @Args('chatId', { type: () => Int }) chatId: number,
    @RequestContextDecorator() context: RequestContext,
  ): Promise<Array<Message> | null> {
    const chatMembers =
      await this.chatMemberService.getChatMemberByChatId(chatId);
    if (!chatMembers) {
      throw new Error(this.i18n.t('errors.notFound'));
    }
    for (const chatMember of chatMembers) {
      if (chatMember.accountId === context.account?.id) {
        return this.messageService.getMessageByChatId(chatId);
      }
    }
    return this.messageService.getMessageByChatId(chatId);
  }

  @Mutation(() => Message, { name: 'createMessage' })
  async createMessage(
    @Args('input') input: CreateMessageInput,
    @RequestContextDecorator() context: RequestContext,
  ): Promise<Message | null> {
    if (input.accountId === context.account?.id) {
      // eslint-disable-next-line sonarjs/no-duplicate-string
      throw new Error(this.i18n.t('errors.unauthorized'));
    }
    return this.messageService.createMessage(input);
  }

  @ResolveField(() => Chat, { name: 'chat' })
  async chat(@Parent() message: Message): Promise<Chat | null> {
    return this.chatService.getChatById(message.chatId!);
  }

  @ResolveField(() => Account, { name: 'account' })
  async account(
    @Parent() message: Message,
    @RequestContextDecorator() context: RequestContext,
  ): Promise<Account | null> {
    if (message.accountId === context.account?.id) {
      throw new Error(this.i18n.t('errors.unauthorized'));
    }
    return this.accountService.getAccountById(message.accountId!);
  }
}
