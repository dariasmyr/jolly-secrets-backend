import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { GroupMemberWhereUniqueInput } from './group-member-where-unique.input';
import { Type } from 'class-transformer';
import { GroupMemberCreateWithoutGroupInput } from './group-member-create-without-group.input';

@InputType()
export class GroupMemberCreateOrConnectWithoutGroupInput {

    @Field(() => GroupMemberWhereUniqueInput, {nullable:false})
    @Type(() => GroupMemberWhereUniqueInput)
    where!: Prisma.AtLeast<GroupMemberWhereUniqueInput, 'id' | 'groupId_accountId'>;

    @Field(() => GroupMemberCreateWithoutGroupInput, {nullable:false})
    @Type(() => GroupMemberCreateWithoutGroupInput)
    create!: GroupMemberCreateWithoutGroupInput;
}
