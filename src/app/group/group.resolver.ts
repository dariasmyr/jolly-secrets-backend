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

import { Event } from '@/@generated/nestgraphql/event/event.model';
import { Group } from '@/@generated/nestgraphql/group/group.model';
import { GroupInvite } from '@/@generated/nestgraphql/group-invite/group-invite.model';
import { GroupMember } from '@/@generated/nestgraphql/group-member/group-member.model';
import { GroupType } from '@/@generated/nestgraphql/prisma/group-type.enum';
import { AuthGuard } from '@/app/auth/auth-guard/auth.guard';
import { RequestContext } from '@/app/auth/request-context-extractor/interfaces';
import { EventService } from '@/app/event/event.service';
import { GroupInviteService } from '@/app/group/group-invite/group-invite.service';
import { GroupMemberService } from '@/app/group/group-member/group-member.service';
import { RequestContextDecorator } from '@/app/request-context.decorator';

import { GroupService } from './group.service';

@InputType()
export class CreateOrUpdateGroupInput {
  @Field()
  name: string;

  @Field()
  description: string;

  @Field()
  type: GroupType;
}

@Resolver(() => Group)
export class GroupResolver {
  constructor(
    private readonly groupService: GroupService,
    private readonly groupMemberService: GroupMemberService,
    private readonly groupInviteService: GroupInviteService,
    private readonly eventService: EventService,
  ) {}

  @Query(() => [Group], { name: 'publicGroups' })
  @UseGuards(AuthGuard)
  async publicGroups(
    @Args('offset') offset: number,
    @Args('limit') limit: number,
  ): Promise<Array<Group>> {
    return this.groupService.getPublicGroups(offset, limit);
  }

  @Query(() => [Group], { name: 'privateGroups' })
  @UseGuards(AuthGuard)
  async privateGroups(
    @RequestContextDecorator() context: RequestContext,
    @Args('offset') offset: number,
    @Args('limit') limit: number,
  ): Promise<Array<Group>> {
    return this.groupService.getPrivateGroups(
      context.account!.id,
      offset,
      limit,
    );
  }

  @Query(() => Group, { name: 'group' })
  @UseGuards(AuthGuard)
  async group(
    @RequestContextDecorator() context: RequestContext,
    @Args('id') id: number,
  ): Promise<Group | null> {
    return this.groupService.getGroupByAccountId(context.account!.id, id);
  }

  @Mutation(() => Group, { name: 'createGroup' })
  @UseGuards(AuthGuard)
  async createGroup(
    @RequestContextDecorator() context: RequestContext,
    @Args('input') input: CreateOrUpdateGroupInput,
  ): Promise<Group> {
    return this.groupService.createGroup(context.account!.id, input);
  }

  @Mutation(() => Group, { name: 'updateGroup' })
  @UseGuards(AuthGuard)
  async updateGroup(
    @RequestContextDecorator() context: RequestContext,
    @Args('id') id: number,
    @Args('input') input: CreateOrUpdateGroupInput,
  ): Promise<Group> {
    return this.groupService.updateGroup(context.account!.id, id, input);
  }

  @Mutation(() => Group, { name: 'deleteGroup' })
  @UseGuards(AuthGuard)
  async deleteGroup(
    @RequestContextDecorator() context: RequestContext,
    @Args('id') id: number,
  ): Promise<Group> {
    return this.groupService.deleteGroup(context.account!.id, id);
  }

  @ResolveField(() => [Group])
  @UseGuards(AuthGuard)
  async members(@Parent() group: Group): Promise<Array<GroupMember> | null> {
    return this.groupMemberService.getGroupMember(group.id);
  }

  @ResolveField(() => [Group])
  @UseGuards(AuthGuard)
  async events(@Parent() group: Group): Promise<Array<Event> | null> {
    return this.eventService.getEventsByGroupId(group.id);
  }

  @ResolveField(() => [Group])
  @UseGuards(AuthGuard)
  async groupInvites(
    @Parent() group: Group,
  ): Promise<Array<GroupInvite> | null> {
    return this.groupInviteService.getGroupInvitesByGroupId(group.id);
  }
}
