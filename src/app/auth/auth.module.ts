import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AccountModule } from '@/app/account/account.module';
import { AccountSessionModule } from '@/app/account-session/account-session.module';
import { AuthResolver } from '@/app/auth/auth.resolver';
import { EmailModule } from '@/app/email/email.module';
import { OneTimeCodeModule } from '@/app/one-time-code/one-time-code.module';
import { ProfileService } from '@/app/profile/profile.service';
import { CryptoModule } from '@/common/crypto/crypto.module';
import { PrismaModule } from '@/common/prisma/prisma.module';

import { AuthService } from './auth.service';
import { ExternalProvidersModule } from './external-providers/external-providers.module';
import { GoogleResolver } from './external-providers/google/google.resolver';
import { GoogleService } from './external-providers/google/google.service';

@Module({
  imports: [
    ConfigModule,
    CryptoModule,
    PrismaModule,
    AccountModule,
    AccountSessionModule,
    OneTimeCodeModule,
    EmailModule,
    ExternalProvidersModule,
  ],
  providers: [
    AuthService,
    AuthResolver,
    GoogleService,
    GoogleResolver,
    ProfileService,
  ],
  exports: [AuthService, AuthResolver],
})
export class AuthModule {}
