import { Injectable } from '@nestjs/common';
import { ExternalProfile } from '@prisma/client';

import { Account } from '@/@generated/nestgraphql/account/account.model';
import { AccountGateway } from '@/app/account/account.gateway';
import { UpdateAccountInput } from '@/app/account/types';
import { PrismaService } from '@/common/prisma/prisma.service';

@Injectable()
export class AccountService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly accountGateway: AccountGateway,
  ) {}

  async getAccountByProfile(profile: ExternalProfile): Promise<Account | null> {
    return this.prisma.account.findUnique({
      where: {
        id: profile.accountId,
      },
    });
  }

  async updateAccount(
    account: Account,
    input: UpdateAccountInput,
  ): Promise<Account> {
    await this.accountGateway.sendToAccount(
      account.id,
      'accountUpdated',
      input,
    );
    return this.prisma.account.update({
      where: {
        id: account.id,
      },
      data: input,
    });
  }
}
