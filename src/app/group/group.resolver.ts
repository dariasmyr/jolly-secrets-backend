import { UseGuards } from '@nestjs/common';
import {
  Args,
  Field,
  InputType,
  Mutation,
  Query,
  Resolver,
} from '@nestjs/graphql';

import { Group } from '@/@generated/nestgraphql/group/group.model';
import { GroupType } from '@/@generated/nestgraphql/prisma/group-type.enum';
import { AuthGuard } from '@/app/auth/auth-guard/auth.guard';
import { RequestContext } from '@/app/auth/request-context-extractor/interfaces';
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

@Resolver()
export class GroupResolver {
  constructor(private readonly groupService: GroupService) {}

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
    return this.groupService.getPrivateGroups(context.account!, offset, limit);
  }

  @Query(() => Group, { name: 'group' })
  @UseGuards(AuthGuard)
  async group(
    @RequestContextDecorator() context: RequestContext,
    @Args('id') id: number,
  ): Promise<Group | null> {
    return this.groupService.getGroupById(context.account!, id);
  }

  @Mutation(() => Group, { name: 'createGroup' })
  @UseGuards(AuthGuard)
  async createGroup(
    @RequestContextDecorator() context: RequestContext,
    @Args('input') input: CreateOrUpdateGroupInput,
  ): Promise<Group> {
    return this.groupService.createGroup(context.account!, input);
  }

  @Mutation(() => Group, { name: 'updateGroup' })
  @UseGuards(AuthGuard)
  async updateGroup(
    @RequestContextDecorator() context: RequestContext,
    @Args('id') id: number,
    @Args('input') input: CreateOrUpdateGroupInput,
  ): Promise<Group> {
    return this.groupService.updateGroup(context.account!, id, input);
  }

  @Mutation(() => Group, { name: 'deleteGroup' })
  @UseGuards(AuthGuard)
  async deleteGroup(
    @RequestContextDecorator() context: RequestContext,
    @Args('id') id: number,
  ): Promise<Group> {
    return this.groupService.deleteGroup(context.account!, id);
  }
}
