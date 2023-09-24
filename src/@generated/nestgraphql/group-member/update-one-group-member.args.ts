import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GroupMemberUpdateInput } from './group-member-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { GroupMemberWhereUniqueInput } from './group-member-where-unique.input';

@ArgsType()
export class UpdateOneGroupMemberArgs {

    @Field(() => GroupMemberUpdateInput, {nullable:false})
    @Type(() => GroupMemberUpdateInput)
    data!: GroupMemberUpdateInput;

    @Field(() => GroupMemberWhereUniqueInput, {nullable:false})
    @Type(() => GroupMemberWhereUniqueInput)
    where!: Prisma.AtLeast<GroupMemberWhereUniqueInput, 'id' | 'groupId_accountId'>;
}
