import { Test, TestingModule } from '@nestjs/testing';

import { GroupInviteResolver } from './group-invite.resolver';

describe('GroupInviteResolver', () => {
  let resolver: GroupInviteResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GroupInviteResolver],
    }).compile();

    resolver = module.get<GroupInviteResolver>(GroupInviteResolver);
  });

  test('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
