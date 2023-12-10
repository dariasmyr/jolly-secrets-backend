import * as console from 'node:console';
import process from 'node:process';

import { Injectable } from '@nestjs/common';
import { ExternalProfileProvider, Message } from '@prisma/client';

import { AccountGateway } from '@/app/account/account.gateway';
import { TelegramService } from '@/app/auth/external-providers/telegram/telegram.service';
import { CreateMessageInput } from '@/app/event-application/message/message.resolver';
import { PrismaService } from '@/common/prisma/prisma.service';

@Injectable()
export class MessageService {
  constructor(
    private readonly accountGateway: AccountGateway,
    private readonly prismaService: PrismaService,
    private readonly telegramService: TelegramService,
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

    const link = `${process.env.SECRET_SANTA_DOMAIN}/chat?id=${chatId}`;

    await this.accountGateway.sendToAccount(receiver.accountId, 'new_message', {
      senderAccountId,
      receiverAccountId: receiver.accountId,
      chatId,
      text,
      link,
    });

    const result = this.prismaService.message.create({
      data: {
        chatId,
        text,
        accountId: senderAccountId,
      },
    });

    const telegramChatId = await this.prismaService.externalProfile.findFirst({
      where: {
        accountId: receiver.accountId,
        provider: ExternalProfileProvider.TELEGRAM,
      },
    });

    if (telegramChatId) {
      await this.telegramService.sendTelegramMessage(
        telegramChatId!.externalId,
        `
      *You have a new message from Secret Santa*
Message: ${text.trim()}
[Click here to reply](${link.trim()})`,
      );
    }

    return result;
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
