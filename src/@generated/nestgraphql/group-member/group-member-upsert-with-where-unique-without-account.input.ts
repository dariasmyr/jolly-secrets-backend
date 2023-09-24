import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { GroupMemberWhereUniqueInput } from './group-member-where-unique.input';
import { Type } from 'class-transformer';
import { GroupMemberUpdateWithoutAccountInput } from './group-member-update-without-account.input';
import { GroupMemberCreateWithoutAccountInput } from './group-member-create-without-account.input';

@InputType()
export class GroupMemberUpsertWithWhereUniqueWithoutAccountInput {

    @Field(() => GroupMemberWhereUniqueInput, {nullable:false})
    @Type(() => GroupMemberWhereUniqueInput)
    where!: Prisma.AtLeast<GroupMemberWhereUniqueInput, 'id' | 'groupId_accountId'>;

    @Field(() => GroupMemberUpdateWithoutAccountInput, {nullable:false})
    @Type(() => GroupMemberUpdateWithoutAccountInput)
    update!: GroupMemberUpdateWithoutAccountInput;

    @Field(() => GroupMemberCreateWithoutAccountInput, {nullable:false})
    @Type(() => GroupMemberCreateWithoutAccountInput)
    create!: GroupMemberCreateWithoutAccountInput;
}
