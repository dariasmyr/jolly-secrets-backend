import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateGroupInviteInput {
  @Field()
  groupId: number;

  @Field()
  code: string;
}
