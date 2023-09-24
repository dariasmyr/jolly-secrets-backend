import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { GroupMemberWhereUniqueInput } from './group-member-where-unique.input';
import { Type } from 'class-transformer';
import { GroupMemberCreateInput } from './group-member-create.input';
import { GroupMemberUpdateInput } from './group-member-update.input';

@ArgsType()
export class UpsertOneGroupMemberArgs {

    @Field(() => GroupMemberWhereUniqueInput, {nullable:false})
    @Type(() => GroupMemberWhereUniqueInput)
    where!: Prisma.AtLeast<GroupMemberWhereUniqueInput, 'id' | 'groupId_accountId'>;

    @Field(() => GroupMemberCreateInput, {nullable:false})
    @Type(() => GroupMemberCreateInput)
    create!: GroupMemberCreateInput;

    @Field(() => GroupMemberUpdateInput, {nullable:false})
    @Type(() => GroupMemberUpdateInput)
    update!: GroupMemberUpdateInput;
}
