import { Resolver } from '@nestjs/graphql';

import { EventApplicationService } from './event-application.service';

@Resolver()
export class EventApplicationResolver {
  constructor(
    private readonly eventApplicationService: EventApplicationService,
  ) {}
}
