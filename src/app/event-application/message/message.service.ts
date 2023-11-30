import * as console from 'node:console';

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
    const { chatId, text, accountId: senderAccountId } = input;
    if (text.trim() === '') {
      // eslint-disable-next-line unicorn/no-null
      return null;
    }

    const members = await this.prismaService.chat
      .findUnique({
        where: {
          id: chatId,
        },
      })
      .members();

    console.log('aaaaaaaaaaaaaaaaaaaa', members);

    const receiver = members?.find((account) => {
      return account.accountId !== senderAccountId;
    });

    if (!receiver) {
      throw new Error('Receiver not found');
    }

    console.log('receiver', receiver);
    console.log('senderAccountId', senderAccountId);

    const MAX_TEXT_LENGTH = 200;

    if (text.length > MAX_TEXT_LENGTH) {
      // eslint-disable-next-line unicorn/no-null
      return null;
    }

    await this.accountGateway.sendToAccount(receiver.accountId, 'new_message', {
      senderAccountId,
      receiverAccountId: receiver.accountId,
      chatId,
      text,
    });

    return this.prismaService.message.create({
      data: {
        chatId,
        text,
        accountId: senderAccountId,
      },
    });
  }

  async getMessageByChatId(chatId: number): Promise<Array<Message> | null> {
    return this.prismaService.message.findMany({
      where: {
        chatId,
      },
      orderBy: {
        createdAt: 'desc',
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
