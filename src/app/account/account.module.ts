import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AccountSessionModule } from '@/app/account-session/account-session.module';
import { CryptoModule } from '@/common/crypto/crypto.module';
import { PrismaModule } from '@/common/prisma/prisma.module';

import { AccountGateway } from './account.gateway';
import { AccountResolver } from './account.resolver';
import { AccountService } from './account.service';

@Module({
  imports: [PrismaModule, CryptoModule, AccountSessionModule, ConfigModule],
  providers: [AccountService, AccountResolver, AccountGateway],
  exports: [AccountService, AccountResolver, AccountGateway],
})
export class AccountModule {}
