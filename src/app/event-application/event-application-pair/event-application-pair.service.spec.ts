import { Test, TestingModule } from '@nestjs/testing';

import { EventApplicationPairService } from './event-application-pair.service';

describe('EventApplicationPairService', () => {
  let service: EventApplicationPairService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EventApplicationPairService],
    }).compile();

    service = module.get<EventApplicationPairService>(
      EventApplicationPairService,
    );
  });

  test('should be defined', () => {
    expect(service).toBeDefined();
  });
});
