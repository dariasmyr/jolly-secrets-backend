import { Test, TestingModule } from '@nestjs/testing';

import { EventApplicationPairResolver } from './event-application-pair.resolver';

describe('EventApplicationPairResolver', () => {
  let resolver: EventApplicationPairResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EventApplicationPairResolver],
    }).compile();

    resolver = module.get<EventApplicationPairResolver>(
      EventApplicationPairResolver,
    );
  });

  test('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
