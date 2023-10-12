import { Test, TestingModule } from '@nestjs/testing';

import { ChatMemberResolver } from './chat-member.resolver';

describe('ChatMemberResolver', () => {
  let resolver: ChatMemberResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ChatMemberResolver],
    }).compile();

    resolver = module.get<ChatMemberResolver>(ChatMemberResolver);
  });

  test('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
