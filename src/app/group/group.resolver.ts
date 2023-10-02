import { Field, InputType, Resolver } from '@nestjs/graphql';

import { GroupType } from '@/@generated/nestgraphql/prisma/group-type.enum';

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
}
