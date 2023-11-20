// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable unicorn/no-null */
import { Injectable } from '@nestjs/common';
import { ExternalProfile } from '@prisma/client';

import { Account } from '@/@generated/nestgraphql/account/account.model';
import { AccountGateway } from '@/app/account/account.gateway';
import { PrismaService } from '@/common/prisma/prisma.service';

@Injectable()
export class AccountService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly accountGateway: AccountGateway,
  ) {}

  async getAccountCount(): Promise<number> {
    return this.prisma.account.count();
  }

  async getAccountByProfile(profile: ExternalProfile): Promise<Account | null> {
    return this.prisma.account.findUnique({
      where: {
        id: profile.accountId,
      },
    });
  }

  async updateAccount(account: Account, publicName: string): Promise<Account> {
    await this.accountGateway.sendToAccount(
      account.id,
      'accountUpdated',
      username,
    );
    return this.prisma.account.update({
      where: {
        id: account.id,
      },
      data: {
        publicName,
      },
    });
  }

  async enableNotifications(account: Account): Promise<Account> {
    return this.prisma.account.update({
      where: {
        id: account.id,
      },
      data: {
        isNotificationsEnabled: true,
      },
    });
  }

  async disableNotifications(account: Account): Promise<Account> {
    return this.prisma.account.update({
      where: {
        id: account.id,
      },
      data: {
        isNotificationsEnabled: false,
      },
    });
  }

  async deleteAccount(account: Account): Promise<Account> {
    return this.prisma.account.update({
      where: {
        id: account.id,
      },
      data: {
        status: 'DELETED',
      },
    });
  }

  async getAccountByGroupMemberId(
    groupMemberId: number,
  ): Promise<Account | null> {
    return this.prisma.account.findFirst({
      where: {
        groupMembers: {
          some: {
            id: groupMemberId,
          },
        },
      },
    });
  }

  async getAccountByMessageId(messageId: number): Promise<Account | null> {
    return this.prisma.account.findFirst({
      where: {
        messages: {
          some: {
            id: messageId,
          },
        },
      },
    });
  }

  async getAccountByChatMemberId(
    chatMemberId: number,
  ): Promise<Account | null> {
    return this.prisma.account.findFirst({
      where: {
        chatMembers: {
          some: {
            id: chatMemberId,
          },
        },
      },
    });
  }

  async getAccountById(accountId: number): Promise<Account | null> {
    return this.prisma.account.findUnique({
      where: {
        id: accountId,
      },
    });
  }
}
