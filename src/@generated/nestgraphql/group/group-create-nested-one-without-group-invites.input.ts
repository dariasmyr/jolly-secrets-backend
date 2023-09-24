import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GroupCreateWithoutGroupInvitesInput } from './group-create-without-group-invites.input';
import { Type } from 'class-transformer';
import { GroupCreateOrConnectWithoutGroupInvitesInput } from './group-create-or-connect-without-group-invites.input';
import { Prisma } from '@prisma/client';
import { GroupWhereUniqueInput } from './group-where-unique.input';

@InputType()
export class GroupCreateNestedOneWithoutGroupInvitesInput {

    @Field(() => GroupCreateWithoutGroupInvitesInput, {nullable:true})
    @Type(() => GroupCreateWithoutGroupInvitesInput)
    create?: GroupCreateWithoutGroupInvitesInput;

    @Field(() => GroupCreateOrConnectWithoutGroupInvitesInput, {nullable:true})
    @Type(() => GroupCreateOrConnectWithoutGroupInvitesInput)
    connectOrCreate?: GroupCreateOrConnectWithoutGroupInvitesInput;

    @Field(() => GroupWhereUniqueInput, {nullable:true})
    @Type(() => GroupWhereUniqueInput)
    connect?: Prisma.AtLeast<GroupWhereUniqueInput, 'id' | 'name'>;
}
