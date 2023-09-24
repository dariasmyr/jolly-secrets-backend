import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { GroupInviteWhereUniqueInput } from './group-invite-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOneGroupInviteArgs {

    @Field(() => GroupInviteWhereUniqueInput, {nullable:false})
    @Type(() => GroupInviteWhereUniqueInput)
    where!: Prisma.AtLeast<GroupInviteWhereUniqueInput, 'id' | 'code'>;
}
