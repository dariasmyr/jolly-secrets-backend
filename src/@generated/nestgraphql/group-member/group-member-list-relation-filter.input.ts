import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GroupMemberWhereInput } from './group-member-where.input';

@InputType()
export class GroupMemberListRelationFilter {

    @Field(() => GroupMemberWhereInput, {nullable:true})
    every?: GroupMemberWhereInput;

    @Field(() => GroupMemberWhereInput, {nullable:true})
    some?: GroupMemberWhereInput;

    @Field(() => GroupMemberWhereInput, {nullable:true})
    none?: GroupMemberWhereInput;
}
