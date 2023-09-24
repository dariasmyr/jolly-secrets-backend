import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { GroupWhereUniqueInput } from './group-where-unique.input';
import { Type } from 'class-transformer';
import { GroupCreateWithoutGroupInvitesInput } from './group-create-without-group-invites.input';

@InputType()
export class GroupCreateOrConnectWithoutGroupInvitesInput {

    @Field(() => GroupWhereUniqueInput, {nullable:false})
    @Type(() => GroupWhereUniqueInput)
    where!: Prisma.AtLeast<GroupWhereUniqueInput, 'id' | 'name'>;

    @Field(() => GroupCreateWithoutGroupInvitesInput, {nullable:false})
    @Type(() => GroupCreateWithoutGroupInvitesInput)
    create!: GroupCreateWithoutGroupInvitesInput;
}
