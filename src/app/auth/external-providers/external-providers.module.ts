import * as console from 'node:console';

import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';

import { AccountModule } from '@/app/account/account.module';
import { AccountSessionModule } from '@/app/account-session/account-session.module';
import { GoogleResolver } from '@/app/auth/external-providers/google/google.resolver';
import { GoogleService } from '@/app/auth/external-providers/google/google.service';
import { ProfileModule } from '@/app/profile/profile.module';
import { ProfileService } from '@/app/profile/profile.service';
import { CryptoModule } from '@/common/crypto/crypto.module';
import { PrismaService } from '@/common/prisma/prisma.service';
import { I18nService } from '@/i18n/i18n.service';

import { TelegramResolver } from './telegram/telegram.resolver';
import { TelegramService } from './telegram/telegram.service';

@Module({
  imports: [
    AccountSessionModule,
    AccountModule,
    ProfileModule,
    CryptoModule,
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => {
        console.log(
          'configService.getOrThrow<string>(JWT_SECRET)',
          configService.getOrThrow<string>('JWT_SECRET'),
        );

        return {
          secret: configService.getOrThrow<string>('JWT_SECRET'),
          signOptions: { expiresIn: '5m' },
        };
      },
      inject: [ConfigService],
    }),
  ],
  providers: [
    GoogleResolver,
    GoogleService,
    TelegramService,
    TelegramResolver,
    ProfileService,
    PrismaService,
    I18nService,
  ],
})
export class ExternalProvidersModule {}
