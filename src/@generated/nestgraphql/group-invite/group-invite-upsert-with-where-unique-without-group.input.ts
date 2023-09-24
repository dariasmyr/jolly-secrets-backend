import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { GroupInviteWhereUniqueInput } from './group-invite-where-unique.input';
import { Type } from 'class-transformer';
import { GroupInviteUpdateWithoutGroupInput } from './group-invite-update-without-group.input';
import { GroupInviteCreateWithoutGroupInput } from './group-invite-create-without-group.input';

@InputType()
export class GroupInviteUpsertWithWhereUniqueWithoutGroupInput {

    @Field(() => GroupInviteWhereUniqueInput, {nullable:false})
    @Type(() => GroupInviteWhereUniqueInput)
    where!: Prisma.AtLeast<GroupInviteWhereUniqueInput, 'id' | 'code'>;

    @Field(() => GroupInviteUpdateWithoutGroupInput, {nullable:false})
    @Type(() => GroupInviteUpdateWithoutGroupInput)
    update!: GroupInviteUpdateWithoutGroupInput;

    @Field(() => GroupInviteCreateWithoutGroupInput, {nullable:false})
    @Type(() => GroupInviteCreateWithoutGroupInput)
    create!: GroupInviteCreateWithoutGroupInput;
}
