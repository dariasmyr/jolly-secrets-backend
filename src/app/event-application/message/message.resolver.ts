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

import { Account } from '@/@generated/nestgraphql/account/account.model';
import { Chat } from '@/@generated/nestgraphql/chat/chat.model';
import { Message } from '@/@generated/nestgraphql/message/message.model';
import { AccountService } from '@/app/account/account.service';
import { ChatService } from '@/app/event-application/chat/chat.service';
import { MessageService } from '@/app/event-application/message/message.service';

@InputType()
export class CreateMessageInput {
  @Field()
  accountId: number;

  @Field()
  chatId: number;

  @Field()
  text: string;
}

@Resolver()
export class MessageResolver {
  constructor(
    private readonly accountService: AccountService,
    private readonly chatService: ChatService,
    private readonly messageService: MessageService,
  ) {}

  @Query(() => [Message], { name: 'messages' })
  async messages(
    @Args('chatId') chatId: number,
  ): Promise<Array<Message> | null> {
    return this.messageService.getMessageByChatId(chatId);
  }

  @Mutation(() => Message, { name: 'createMessage' })
  async createMessage(
    @Args('input') input: CreateMessageInput,
  ): Promise<Message | null> {
    return this.messageService.createMessage(input);
  }

  @ResolveField(() => Chat, { name: 'chat' })
  async chat(@Parent() message: Message): Promise<Chat | null> {
    return this.chatService.getChatById(message.chatId!);
  }

  @ResolveField(() => Account, { name: 'account' })
  async account(@Parent() message: Message): Promise<Account | null> {
    return this.accountService.getAccountById(message.accountId!);
  }
}
