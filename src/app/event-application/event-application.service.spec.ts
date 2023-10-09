import { Test, TestingModule } from '@nestjs/testing';

import { EventApplicationService } from './event-application.service';

describe('EventApplicationService', () => {
  let service: EventApplicationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EventApplicationService],
    }).compile();

    service = module.get<EventApplicationService>(EventApplicationService);
  });

  test('should be defined', () => {
    expect(service).toBeDefined();
  });
});
