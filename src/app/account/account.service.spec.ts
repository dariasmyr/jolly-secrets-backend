import { ConfigModule } from '@nestjs/config';
import { Test, TestingModule } from '@nestjs/testing';
import { ExternalProfileProvider } from '@prisma/client';
import { I18nService } from 'nestjs-i18n';

import { AccountModule } from '@/app/account/account.module';
import { AccountSessionModule } from '@/app/account-session/account-session.module';
import { AccountSessionService } from '@/app/account-session/account-session.service';
import { CryptoModule } from '@/common/crypto/crypto.module';
import { LoggerModule } from '@/common/logger/logger.module';
import { PrismaModule } from '@/common/prisma/prisma.module';
import { PrismaService } from '@/common/prisma/prisma.service';

import { AccountService } from './account.service';

describe('UserService', () => {
  let service: AccountService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        PrismaModule,
        CryptoModule,
        AccountModule,
        LoggerModule,
        ConfigModule,
        AccountSessionModule,
      ],
      providers: [
        AccountService,
        PrismaService,
        AccountSessionService,
        I18nService,
      ],
    }).compile();

    service = module.get<AccountService>(AccountService);
  });

  test('should get account by profile', async () => {
    const profile = {
      id: 1,
      createdAt: new Date('2021-09-25T14:37:49.571Z'),
      updatedAt: new Date('2023-09-25T14:37:49.571Z'),
      provider: ExternalProfileProvider.GOOGLE,
      externalId: '117911639726729414130',
      accountId: 1,
    };

    const result = await service.getAccountByProfile(profile);

    expect(result).toBeDefined();
  });
});
