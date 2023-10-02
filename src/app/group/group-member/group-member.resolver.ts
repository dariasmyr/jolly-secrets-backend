import { UseGuards } from '@nestjs/common';
import { Args, Field, InputType, Query, Resolver } from '@nestjs/graphql';

import { GroupMember } from '@/@generated/nestgraphql/group-member/group-member.model';
import { AuthGuard } from '@/app/auth/auth-guard/auth.guard';
import { GroupMemberService } from '@/app/group/group-member/group-member.service';

@InputType()
export class CreateGroupMemberInput {
  @Field()
  groupId: number;

  @Field()
  accountId: number;

  @Field()
  code?: string;
}

@Resolver()
export class GroupMemberResolver {
  constructor(private readonly groupMemberService: GroupMemberService) {}

  @Query(() => [GroupMember], { name: 'groupMember' })
  @UseGuards(AuthGuard)
  async groupMember(
    @Args('groupId') groupId: number,
  ): Promise<Array<GroupMember> | null> {
    return this.groupMemberService.getGroupMember(groupId);
  }
}
