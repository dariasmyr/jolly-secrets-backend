import { forwardRef, Module } from '@nestjs/common';

import { EventApplicationModule } from '@/app/event-application/event-application.module';
import { GroupModule } from '@/app/group/group.module';
import { PrismaService } from '@/common/prisma/prisma.service';

import { EventResolver } from './event.resolver';
import { EventService } from './event.service';

@Module({
  imports: [
    forwardRef(() => GroupModule),
    forwardRef(() => EventApplicationModule),
  ],
  providers: [EventResolver, EventService, PrismaService],
  exports: [EventService],
})
export class EventModule {}
