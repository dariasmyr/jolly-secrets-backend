import { Test, TestingModule } from '@nestjs/testing';

import { TelegramResolver } from './telegram.resolver';

describe('TelegramResolver', () => {
  let resolver: TelegramResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TelegramResolver],
    }).compile();

    resolver = module.get<TelegramResolver>(TelegramResolver);
  });

  test('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
