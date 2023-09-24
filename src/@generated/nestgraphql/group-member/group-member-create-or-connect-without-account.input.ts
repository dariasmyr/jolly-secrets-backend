import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { GroupMemberWhereUniqueInput } from './group-member-where-unique.input';
import { Type } from 'class-transformer';
import { GroupMemberCreateWithoutAccountInput } from './group-member-create-without-account.input';

@InputType()
export class GroupMemberCreateOrConnectWithoutAccountInput {

    @Field(() => GroupMemberWhereUniqueInput, {nullable:false})
    @Type(() => GroupMemberWhereUniqueInput)
    where!: Prisma.AtLeast<GroupMemberWhereUniqueInput, 'id' | 'groupId_accountId'>;

    @Field(() => GroupMemberCreateWithoutAccountInput, {nullable:false})
    @Type(() => GroupMemberCreateWithoutAccountInput)
    create!: GroupMemberCreateWithoutAccountInput;
}
