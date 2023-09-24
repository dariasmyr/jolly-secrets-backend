import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { GroupMemberRole } from '../prisma/group-member-role.enum';
import { Group } from '../group/group.model';
import { Account } from '../account/account.model';

@ObjectType()
export class GroupMember {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => Int, {nullable:false})
    groupId!: number;

    @Field(() => Int, {nullable:false})
    accountId!: number;

    @Field(() => GroupMemberRole, {nullable:false,defaultValue:'MEMBER'})
    role!: keyof typeof GroupMemberRole;

    @Field(() => Group, {nullable:false})
    group?: Group;

    @Field(() => Account, {nullable:false})
    account?: Account;
}
