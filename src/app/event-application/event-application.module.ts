import { Module } from '@nestjs/common';

import { EventApplicationResolver } from './event-application.resolver';
import { EventApplicationService } from './event-application.service';
import { EventApplicationPairResolver } from './event-application-pair/event-application-pair.resolver';
import { EventApplicationPairService } from './event-application-pair/event-application-pair.service';

@Module({
  providers: [
    EventApplicationResolver,
    EventApplicationService,
    EventApplicationPairService,
    EventApplicationPairResolver,
  ],
})
export class EventApplicationModule {}
