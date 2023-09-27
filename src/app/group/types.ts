import { Field, InputType } from '@nestjs/graphql';

import { GroupType } from '@/@generated/nestgraphql/prisma/group-type.enum';

@InputType()
export class CreateGroupInput {
  @Field()
  name: string;

  @Field()
  description: string;

  @Field()
  type: GroupType;
}
