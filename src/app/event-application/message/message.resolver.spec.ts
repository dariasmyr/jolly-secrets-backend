import { Test, TestingModule } from '@nestjs/testing';

import { MessageResolver } from './message.resolver';

describe('MessageResolver', () => {
  let resolver: MessageResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MessageResolver],
    }).compile();

    resolver = module.get<MessageResolver>(MessageResolver);
  });

  test('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
