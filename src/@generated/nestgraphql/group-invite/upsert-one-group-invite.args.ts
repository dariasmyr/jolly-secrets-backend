import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { GroupInviteWhereUniqueInput } from './group-invite-where-unique.input';
import { Type } from 'class-transformer';
import { GroupInviteCreateInput } from './group-invite-create.input';
import { GroupInviteUpdateInput } from './group-invite-update.input';

@ArgsType()
export class UpsertOneGroupInviteArgs {

    @Field(() => GroupInviteWhereUniqueInput, {nullable:false})
    @Type(() => GroupInviteWhereUniqueInput)
    where!: Prisma.AtLeast<GroupInviteWhereUniqueInput, 'id' | 'code'>;

    @Field(() => GroupInviteCreateInput, {nullable:false})
    @Type(() => GroupInviteCreateInput)
    create!: GroupInviteCreateInput;

    @Field(() => GroupInviteUpdateInput, {nullable:false})
    @Type(() => GroupInviteUpdateInput)
    update!: GroupInviteUpdateInput;
}
