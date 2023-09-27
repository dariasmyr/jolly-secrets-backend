import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateGroupMemberInput {
  @Field()
  groupId: number;

  @Field()
  code: string;

  @Field()
  accountId: number;
}
