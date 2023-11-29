import { Injectable } from '@nestjs/common';
import { Message } from '@prisma/client';

import { AccountGateway } from '@/app/account/account.gateway';
import { CreateMessageInput } from '@/app/event-application/message/message.resolver';
import { PrismaService } from '@/common/prisma/prisma.service';

@Injectable()
export class MessageService {
  constructor(
    private readonly accountGateway: AccountGateway,
    private readonly prismaService: PrismaService,
  ) {}

  async createMessage(input: CreateMessageInput): Promise<Message | null> {
    const { chatId, text, accountId } = input;
    if (text.trim() === '') {
      // eslint-disable-next-line unicorn/no-null
      return null;
    }

    const MAX_TEXT_LENGTH = 200;

    if (text.length > MAX_TEXT_LENGTH) {
      // eslint-disable-next-line unicorn/no-null
      return null;
    }

    await this.accountGateway.sendToAccount(accountId, 'new_message', {
      chatId,
      text,
    });

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
