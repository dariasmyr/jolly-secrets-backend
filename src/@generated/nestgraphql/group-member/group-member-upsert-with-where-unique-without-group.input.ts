import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { GroupMemberWhereUniqueInput } from './group-member-where-unique.input';
import { Type } from 'class-transformer';
import { GroupMemberUpdateWithoutGroupInput } from './group-member-update-without-group.input';
import { GroupMemberCreateWithoutGroupInput } from './group-member-create-without-group.input';

@InputType()
export class GroupMemberUpsertWithWhereUniqueWithoutGroupInput {

    @Field(() => GroupMemberWhereUniqueInput, {nullable:false})
    @Type(() => GroupMemberWhereUniqueInput)
    where!: Prisma.AtLeast<GroupMemberWhereUniqueInput, 'id' | 'groupId_accountId'>;

    @Field(() => GroupMemberUpdateWithoutGroupInput, {nullable:false})
    @Type(() => GroupMemberUpdateWithoutGroupInput)
    update!: GroupMemberUpdateWithoutGroupInput;

    @Field(() => GroupMemberCreateWithoutGroupInput, {nullable:false})
    @Type(() => GroupMemberCreateWithoutGroupInput)
    create!: GroupMemberCreateWithoutGroupInput;
}
