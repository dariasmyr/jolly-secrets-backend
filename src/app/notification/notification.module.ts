import { forwardRef, Module } from '@nestjs/common';

import { EventApplicationModule } from '@/app/event-application/event-application.module';
import { EventApplicationService } from '@/app/event-application/event-application.service';
import { EventApplicationPairService } from '@/app/event-application/event-application-pair/event-application-pair.service';
import { PrismaService } from '@/common/prisma/prisma.service';

import { NotificationResolver } from './notification.resolver';
import { NotificationService } from './notification.service';

@Module({
  imports: [forwardRef(() => EventApplicationModule)],
  providers: [
    NotificationResolver,
    NotificationService,
    PrismaService,
    EventApplicationService,
    EventApplicationPairService,
  ],
  exports: [NotificationResolver, NotificationService],
})
export class NotificationModule {}
