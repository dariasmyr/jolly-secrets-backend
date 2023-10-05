import { Module } from '@nestjs/common';

import { PrismaService } from '@/common/prisma/prisma.service';

import { NotificationResolver } from './notification.resolver';
import { NotificationService } from './notification.service';

@Module({
  providers: [NotificationResolver, NotificationService, PrismaService],
  exports: [NotificationResolver, NotificationService],
})
export class NotificationModule {}
