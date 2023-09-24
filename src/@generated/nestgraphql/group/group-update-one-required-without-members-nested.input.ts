import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GroupCreateWithoutMembersInput } from './group-create-without-members.input';
import { Type } from 'class-transformer';
import { GroupCreateOrConnectWithoutMembersInput } from './group-create-or-connect-without-members.input';
import { GroupUpsertWithoutMembersInput } from './group-upsert-without-members.input';
import { Prisma } from '@prisma/client';
import { GroupWhereUniqueInput } from './group-where-unique.input';
import { GroupUpdateToOneWithWhereWithoutMembersInput } from './group-update-to-one-with-where-without-members.input';

@InputType()
export class GroupUpdateOneRequiredWithoutMembersNestedInput {

    @Field(() => GroupCreateWithoutMembersInput, {nullable:true})
    @Type(() => GroupCreateWithoutMembersInput)
    create?: GroupCreateWithoutMembersInput;

    @Field(() => GroupCreateOrConnectWithoutMembersInput, {nullable:true})
    @Type(() => GroupCreateOrConnectWithoutMembersInput)
    connectOrCreate?: GroupCreateOrConnectWithoutMembersInput;

    @Field(() => GroupUpsertWithoutMembersInput, {nullable:true})
    @Type(() => GroupUpsertWithoutMembersInput)
    upsert?: GroupUpsertWithoutMembersInput;

    @Field(() => GroupWhereUniqueInput, {nullable:true})
    @Type(() => GroupWhereUniqueInput)
    connect?: Prisma.AtLeast<GroupWhereUniqueInput, 'id' | 'name'>;

    @Field(() => GroupUpdateToOneWithWhereWithoutMembersInput, {nullable:true})
    @Type(() => GroupUpdateToOneWithWhereWithoutMembersInput)
    update?: GroupUpdateToOneWithWhereWithoutMembersInput;
}
