import { Module } from '@nestjs/common';

import { GroupResolver } from './group.resolver';
import { GroupService } from './group.service';
import { GroupMemberResolver } from './group-member/group-member.resolver';
import { GroupMemberService } from './group-member/group-member.service';

@Module({
  providers: [
    GroupResolver,
    GroupService,
    GroupMemberService,
    GroupMemberResolver,
  ],
})
export class GroupModule {}
