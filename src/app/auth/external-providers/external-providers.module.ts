import { Module } from '@nestjs/common';

import { AccountModule } from '@/app/account/account.module';
import { AccountSessionModule } from '@/app/account-session/account-session.module';
import { GoogleResolver } from '@/app/auth/external-providers/google/google.resolver';
import { GoogleService } from '@/app/auth/external-providers/google/google.service';
import { OneTimeCodeService } from '@/app/one-time-code/one-time-code.service';
import { ProfileModule } from '@/app/profile/profile.module';
import { ProfileService } from '@/app/profile/profile.service';
import { CryptoModule } from '@/common/crypto/crypto.module';
import { PrismaService } from '@/common/prisma/prisma.service';

import { TelegramResolver } from './telegram/telegram.resolver';
import { TelegramService } from './telegram/telegram.service';

export enum ExternalProviders {
  GOOGLE = 'google',
  TELEGRAM = 'telegram',
}

@Module({
  imports: [AccountSessionModule, AccountModule, ProfileModule, CryptoModule],
  providers: [
    GoogleResolver,
    GoogleService,
    TelegramService,
    TelegramResolver,
    ProfileService,
    PrismaService,
    OneTimeCodeService,
  ],
})
export class ExternalProvidersModule {}
