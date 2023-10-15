import { UseGuards } from '@nestjs/common';
import { Args, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';

import { Group } from '@/@generated/nestgraphql/group/group.model';
import { GroupInvite } from '@/@generated/nestgraphql/group-invite/group-invite.model';
import { AuthGuard } from '@/app/auth/auth-guard/auth.guard';
import { GroupService } from '@/app/group/group.service';
import { GroupInviteService } from '@/app/group/group-invite/group-invite.service';

@Resolver(() => GroupInvite)
export class GroupInviteResolver {
  constructor(
    private readonly groupInviteService: GroupInviteService,
    private readonly groupService: GroupService,
  ) {}

  @Query(() => [GroupInvite], { name: 'groupInvite' })
  @UseGuards(AuthGuard)
  async groupInvite(
    @Args('groupId') groupId: number,
  ): Promise<Array<GroupInvite> | null> {
    return this.groupInviteService.getGroupInvitesByGroupId(groupId);
  }

  @ResolveField(() => [Group])
  @UseGuards(AuthGuard)
  async group(@Parent() groupInvite: GroupInvite): Promise<Group | null> {
    return this.groupService.getGroupByAccountId(
      groupInvite.id,
      groupInvite.groupId,
    );
  }
}
