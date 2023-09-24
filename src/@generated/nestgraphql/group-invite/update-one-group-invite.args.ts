import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GroupInviteUpdateInput } from './group-invite-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { GroupInviteWhereUniqueInput } from './group-invite-where-unique.input';

@ArgsType()
export class UpdateOneGroupInviteArgs {

    @Field(() => GroupInviteUpdateInput, {nullable:false})
    @Type(() => GroupInviteUpdateInput)
    data!: GroupInviteUpdateInput;

    @Field(() => GroupInviteWhereUniqueInput, {nullable:false})
    @Type(() => GroupInviteWhereUniqueInput)
    where!: Prisma.AtLeast<GroupInviteWhereUniqueInput, 'id' | 'code'>;
}
