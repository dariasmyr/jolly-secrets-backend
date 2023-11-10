import * as crypto from 'node:crypto';

import { Injectable } from '@nestjs/common';
import {
  Account,
  AccountRole,
  AccountStatus,
  ExternalProfile,
  ExternalProfileProvider,
} from '@prisma/client';

import { PrismaService } from '@/common/prisma/prisma.service';

export interface ICreateProfileInput {
  externalId: string;
  provider: ExternalProfileProvider;
  username: string;
}

@Injectable()
export class ProfileService {
  constructor(private readonly prisma: PrismaService) {}

  async getProfileByExternalId(
    externalId: string,
    provider: ExternalProfileProvider,
  ): Promise<ExternalProfile | null> {
    return this.prisma.externalProfile.findUnique({
      where: {
        // eslint-disable-next-line camelcase
        provider_externalId: {
          externalId,
          provider,
        },
      },
    });
  }

  seeds = [
    'Angel',
    'Simba',
    'Salem',
    'Snuggles',
    'Garfield',
    'Sasha',
    'Boots',
    'Max',
    'Tiger',
    'Chloe',
    'Socks',
    'Abby',
    'Buster',
    'Daisy',
    'Sammy',
    'Harley',
    'Mimi',
    'Loki',
    'Buddy',
    'Milo',
  ];

  async createProfile(data: ICreateProfileInput): Promise<ExternalProfile> {
    const { externalId, provider, username } = data;

    const hash = crypto.createHash('md5').update(externalId).digest('hex');
    const seedIndex = Number.parseInt(hash, 16) % this.seeds.length;
    const seed = this.seeds[seedIndex];

    const avatar = `https://api.dicebear.com/7.x/bottts/svg?seed=${seed}?backgroundColor=ffffff,ffffff,ffffff`;

    return this.prisma.externalProfile.create({
      data: {
        externalId,
        provider,
        account: {
          create: {
            username: username,
            status: AccountStatus.ACTIVE,
            roles: [AccountRole.USER],
            avatarUrl: avatar,
          },
        },
      },
    });
  }

  async mergeProfileToAccount(
    accountIdToRemove: number,
    accountIdToLeave: number,
    profile: ExternalProfile,
  ): Promise<Account> {
    const { externalId, provider } = profile;

    const result = await this.prisma.$transaction([
      this.prisma.externalProfile.update({
        where: {
          // eslint-disable-next-line camelcase
          provider_externalId: {
            externalId,
            provider,
          },
        },

        data: {
          accountId: accountIdToLeave,
        },
      }),
      this.prisma.account.delete({
        where: {
          id: accountIdToRemove,
        },
      }),
    ]);
    return result[1];
  }

  async getExternalProfileByAccountId(
    accountId: number,
  ): Promise<ExternalProfile[] | null> {
    return this.prisma.externalProfile.findMany({
      where: {
        accountId,
      },
    });
  }
}
