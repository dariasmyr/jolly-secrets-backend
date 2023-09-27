import { Test, TestingModule } from '@nestjs/testing';

import { GroupInviteService } from './group-invite.service';

describe('GroupInviteService', () => {
  let service: GroupInviteService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GroupInviteService],
    }).compile();

    service = module.get<GroupInviteService>(GroupInviteService);
  });

  test('should be defined', () => {
    expect(service).toBeDefined();
  });
});
