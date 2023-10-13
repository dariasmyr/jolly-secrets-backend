import { forwardRef, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AccountSessionModule } from '@/app/account-session/account-session.module';
import { EventApplicationModule } from '@/app/event-application/event-application.module';
import { GroupModule } from '@/app/group/group.module';
import { NotificationModule } from '@/app/notification/notification.module';
import { NotificationService } from '@/app/notification/notification.service';
import { ProfileModule } from '@/app/profile/profile.module';
import { CryptoModule } from '@/common/crypto/crypto.module';
import { PrismaModule } from '@/common/prisma/prisma.module';

import { AccountGateway } from './account.gateway';
import { AccountResolver } from './account.resolver';
import { AccountService } from './account.service';

@Module({
  imports: [
    PrismaModule,
    CryptoModule,
    AccountSessionModule,
    ConfigModule,
    forwardRef(() => GroupModule),
    forwardRef(() => EventApplicationModule),
    forwardRef(() => NotificationModule),
    ProfileModule,
  ],
  providers: [
    AccountService,
    AccountResolver,
    AccountGateway,
    NotificationService,
  ],
  exports: [AccountService, AccountResolver, AccountGateway],
})
export class AccountModule {}
