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
import { ChatMember } from '@/@generated/nestgraphql/chat-member/chat-member.model';
import { ChatMemberRole } from '@/@generated/nestgraphql/prisma/chat-member-role.enum';
import { AccountService } from '@/app/account/account.service';
import { ChatService } from '@/app/event-application/chat/chat.service';
import { ChatMemberService } from '@/app/event-application/chat-member/chat-member.service';
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
  ) {}

  @Query(() => [ChatMember], { name: 'chatMembers' })
  async chatMembers(
    @Args('chatId') chatId: number,
  ): Promise<Array<ChatMember> | null> {
    return this.chatMemberService.getChatMemberByChatId(chatId);
  }

  @Mutation(() => ChatMember, { name: 'createChatMember' })
  async createChatMember(
    @Args('input') input: CreateChatMemberInput,
  ): Promise<ChatMember | null> {
    return this.chatMemberService.createChatMember(input);
  }

  @ResolveField(() => Chat, { name: 'chat' })
  async chat(@Parent() chatMember: ChatMember): Promise<Chat | null> {
    return this.chatService.getChatById(chatMember.chatId!);
  }

  @ResolveField(() => Account, { name: 'account' })
  async account(@Parent() chatMember: ChatMember): Promise<Account | null> {
    return this.accountService.getAccountByChatMemberId(chatMember.id!);
  }
}
