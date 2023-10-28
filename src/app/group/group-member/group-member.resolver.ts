import { UseGuards } from '@nestjs/common';
import {
  Args,
  Field,
  InputType,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';

import { Account } from '@/@generated/nestgraphql/account/account.model';
import { Group } from '@/@generated/nestgraphql/group/group.model';
import { GroupMember } from '@/@generated/nestgraphql/group-member/group-member.model';
import { AccountService } from '@/app/account/account.service';
import { AuthGuard } from '@/app/auth/auth-guard/auth.guard';
import { RequestContext } from '@/app/auth/request-context-extractor/interfaces';
import { GroupService } from '@/app/group/group.service';
import { GroupMemberService } from '@/app/group/group-member/group-member.service';
import { RequestContextDecorator } from '@/app/request-context.decorator';

@InputType()
export class CreateGroupMemberInput {
  @Field()
  accountId: number;

  @Field()
  code?: string;
}

@Resolver(() => GroupMember)
export class GroupMemberResolver {
  constructor(
    private readonly groupMemberService: GroupMemberService,
    private readonly accountService: AccountService,
    private readonly groupService: GroupService,
  ) {}

  @Query(() => [GroupMember], { name: 'groupMember' })
  @UseGuards(AuthGuard)
  async groupMember(
    @Args('groupId') groupId: number,
  ): Promise<Array<GroupMember> | null> {
    return this.groupMemberService.getGroupMember(groupId);
  }

  @ResolveField(() => [Account])
  @UseGuards(AuthGuard)
  async account(@Parent() groupMember: GroupMember): Promise<Account | null> {
    return this.accountService.getAccountByGroupMemberId(groupMember.id);
  }

  @ResolveField(() => [Group])
  @UseGuards(AuthGuard)
  async group(@Parent() groupMember: GroupMember): Promise<Group | null> {
    return this.groupService.getGroupByAccountId(
      groupMember.accountId,
      groupMember.groupId,
    );
  }

  @Mutation(() => GroupMember)
  @UseGuards(AuthGuard)
  async createGroupMember(
    @RequestContextDecorator() context: RequestContext,
    @Args('code') code: string,
  ): Promise<GroupMember | null> {
    return this.groupMemberService.createGroupMember(context.account!.id, code);
  }
}
