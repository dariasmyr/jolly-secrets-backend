import { Test, TestingModule } from '@nestjs/testing';

import { ChatMemberService } from './chat-member.service';

describe('ChatMemberService', () => {
  let service: ChatMemberService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ChatMemberService],
    }).compile();

    service = module.get<ChatMemberService>(ChatMemberService);
  });

  test('should be defined', () => {
    expect(service).toBeDefined();
  });
});
