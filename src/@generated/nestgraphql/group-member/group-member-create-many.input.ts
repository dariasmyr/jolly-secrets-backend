import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { GroupMemberRole } from '../prisma/group-member-role.enum';

@InputType()
export class GroupMemberCreateManyInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => Int, {nullable:false})
    groupId!: number;

    @Field(() => Int, {nullable:false})
    accountId!: number;

    @Field(() => GroupMemberRole, {nullable:true})
    role?: keyof typeof GroupMemberRole;
}
