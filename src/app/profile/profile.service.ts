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

  async createProfile(data: ICreateProfileInput): Promise<ExternalProfile> {
    const { externalId, provider, username } = data;
    return this.prisma.externalProfile.create({
      data: {
        externalId,
        provider,
        account: {
          create: {
            username: username,
            status: AccountStatus.ACTIVE,
            roles: [AccountRole.USER],
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
