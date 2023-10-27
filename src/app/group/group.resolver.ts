import { UseGuards } from '@nestjs/common';
import {
  Args,
  Field,
  InputType,
  Int,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { I18nService } from 'nestjs-i18n';

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

  @Field(() => GroupType)
  type: GroupType;
}

@Resolver(() => Group)
export class GroupResolver {
  constructor(
    private readonly groupService: GroupService,
    private readonly groupMemberService: GroupMemberService,
    private readonly groupInviteService: GroupInviteService,
    private readonly eventService: EventService,
    private i18n: I18nService,
  ) {}

  private async checkGroupMembership(
    accountId: number,
    groupId: number,
  ): Promise<void> {
    const isMember = await this.groupService.ifAccountMemberOfGroup(
      accountId,
      groupId,
    );

    if (!isMember) {
      throw new Error(this.i18n.t('errors.unauthorized'));
    }
  }

  private async checkIfMemberIsGroupAdmin(
    accountId: number,
    groupId: number,
  ): Promise<void> {
    const isAdmin = await this.groupService.isMemberGroupAdmin(
      accountId,
      groupId,
    );

    if (!isAdmin) {
      throw new Error(this.i18n.t('errors.unauthorized'));
    }
  }

  @Query(() => [Group], { name: 'publicGroups' })
  @UseGuards(AuthGuard)
  async publicGroups(
    @Args('offset', { type: () => Int }) offset: number,
    @Args('limit', { type: () => Int }) limit: number,
  ): Promise<Array<Group>> {
    return this.groupService.getPublicGroups(offset, limit);
  }

  @Query(() => [Group], { name: 'privateGroups' })
  @UseGuards(AuthGuard)
  async privateGroups(
    @RequestContextDecorator() context: RequestContext,
    @Args('offset', { type: () => Int }) offset: number,
    @Args('limit', { type: () => Int }) limit: number,
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
    @Args('id', { type: () => Int }) id: number,
  ): Promise<Group | null> {
    await this.checkGroupMembership(context.account!.id, id);
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
    await this.checkGroupMembership(context.account!.id, id);
    await this.checkIfMemberIsGroupAdmin(context.account!.id, id);
    return this.groupService.updateGroup(context.account!.id, id, input);
  }

  @Mutation(() => Group, { name: 'deleteGroup' })
  @UseGuards(AuthGuard)
  async deleteGroup(
    @RequestContextDecorator() context: RequestContext,
    @Args('id', { type: () => Int }) id: number,
  ): Promise<Group> {
    await this.checkGroupMembership(context.account!.id, id);
    await this.checkIfMemberIsGroupAdmin(context.account!.id, id);
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
    @RequestContextDecorator() context: RequestContext,
  ): Promise<Array<GroupInvite> | null> {
    await this.checkGroupMembership(context.account!.id, group.id);
    return this.groupInviteService.getGroupInvitesByGroupId(group.id);
  }
}
