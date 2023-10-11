import { forwardRef, Module } from '@nestjs/common';

import { EventModule } from '@/app/event/event.module';
import { PrismaService } from '@/common/prisma/prisma.service';

import { EventApplicationResolver } from './event-application.resolver';
import { EventApplicationService } from './event-application.service';
import { EventApplicationPairResolver } from './event-application-pair/event-application-pair.resolver';
import { EventApplicationPairService } from './event-application-pair/event-application-pair.service';
import { PreferenceResolver } from './preference/preference.resolver';
import { PreferenceService } from './preference/preference.service';

@Module({
  imports: [forwardRef(() => EventModule)],
  providers: [
    PrismaService,
    EventApplicationResolver,
    EventApplicationService,
    EventApplicationPairService,
    EventApplicationPairResolver,
    PreferenceResolver,
    PreferenceService,
  ],
})
export class EventApplicationModule {}
