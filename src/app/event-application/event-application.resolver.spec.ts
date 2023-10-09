import { Test, TestingModule } from '@nestjs/testing';

import { EventApplicationResolver } from './event-application.resolver';
import { EventApplicationService } from './event-application.service';

describe('EventApplicationResolver', () => {
  let resolver: EventApplicationResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EventApplicationResolver, EventApplicationService],
    }).compile();

    resolver = module.get<EventApplicationResolver>(EventApplicationResolver);
  });

  test('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
