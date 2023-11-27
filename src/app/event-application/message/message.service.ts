import { Injectable } from '@nestjs/common';
import { Message } from '@prisma/client';

import { CreateMessageInput } from '@/app/event-application/message/message.resolver';
import { PrismaService } from '@/common/prisma/prisma.service';

@Injectable()
export class MessageService {
  constructor(private readonly prismaService: PrismaService) {}

  async createMessage(input: CreateMessageInput): Promise<Message | null> {
    const { chatId, text, accountId } = input;
    if (text.trim() === '') {
      // eslint-disable-next-line unicorn/no-null
      return null;
    }

    if (text.length > 200) {
      // eslint-disable-next-line unicorn/no-null
      return null;
    }

    return this.prismaService.message.create({
      data: {
        chatId,
        text,
        accountId,
      },
    });
  }

  async getMessageByChatId(chatId: number): Promise<Array<Message> | null> {
    return this.prismaService.message.findMany({
      where: {
        chatId,
      },
    });
  }

  async getMessageByAccountId(
    accountId: number,
  ): Promise<Array<Message> | null> {
    return this.prismaService.message.findMany({
      where: {
        accountId,
      },
    });
  }
}
