import { forwardRef, Module } from '@nestjs/common';

import { GroupModule } from '@/app/group/group.module';
import { PrismaService } from '@/common/prisma/prisma.service';

import { EventResolver } from './event.resolver';
import { EventService } from './event.service';

@Module({
  imports: [forwardRef(() => GroupModule)],
  providers: [EventResolver, EventService, PrismaService],
  exports: [EventService],
})
export class EventModule {}
