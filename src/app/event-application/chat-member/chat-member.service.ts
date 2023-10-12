import { Injectable } from '@nestjs/common';
import { ChatMember } from '@prisma/client';

import { CreateChatMemberInput } from '@/app/event-application/chat-member/chat-member.resolver';
import { PrismaService } from '@/common/prisma/prisma.service';

@Injectable()
export class ChatMemberService {
  constructor(private readonly prismaService: PrismaService) {}

  async createChatMember(
    input: CreateChatMemberInput,
  ): Promise<ChatMember | null> {
    const { accountId, chatId, role } = input;
    return this.prismaService.chatMember.create({
      data: {
        accountId,
        chatId,
        role,
      },
    });
  }

  async getChatMemberByChatId(
    chatId: number,
  ): Promise<Array<ChatMember> | null> {
    return this.prismaService.chatMember.findMany({
      where: {
        chatId,
      },
    });
  }

  async getChatMemberByAccountId(
    accountId: number,
  ): Promise<Array<ChatMember> | null> {
    return this.prismaService.chatMember.findMany({
      where: {
        accountId,
      },
    });
  }
}
