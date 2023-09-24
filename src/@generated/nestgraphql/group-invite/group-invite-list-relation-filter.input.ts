import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GroupInviteWhereInput } from './group-invite-where.input';

@InputType()
export class GroupInviteListRelationFilter {

    @Field(() => GroupInviteWhereInput, {nullable:true})
    every?: GroupInviteWhereInput;

    @Field(() => GroupInviteWhereInput, {nullable:true})
    some?: GroupInviteWhereInput;

    @Field(() => GroupInviteWhereInput, {nullable:true})
    none?: GroupInviteWhereInput;
}
