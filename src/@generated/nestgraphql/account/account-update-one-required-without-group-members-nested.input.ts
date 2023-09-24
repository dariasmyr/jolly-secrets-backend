import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AccountCreateWithoutGroupMembersInput } from './account-create-without-group-members.input';
import { Type } from 'class-transformer';
import { AccountCreateOrConnectWithoutGroupMembersInput } from './account-create-or-connect-without-group-members.input';
import { AccountUpsertWithoutGroupMembersInput } from './account-upsert-without-group-members.input';
import { Prisma } from '@prisma/client';
import { AccountWhereUniqueInput } from './account-where-unique.input';
import { AccountUpdateToOneWithWhereWithoutGroupMembersInput } from './account-update-to-one-with-where-without-group-members.input';

@InputType()
export class AccountUpdateOneRequiredWithoutGroupMembersNestedInput {

    @Field(() => AccountCreateWithoutGroupMembersInput, {nullable:true})
    @Type(() => AccountCreateWithoutGroupMembersInput)
    create?: AccountCreateWithoutGroupMembersInput;

    @Field(() => AccountCreateOrConnectWithoutGroupMembersInput, {nullable:true})
    @Type(() => AccountCreateOrConnectWithoutGroupMembersInput)
    connectOrCreate?: AccountCreateOrConnectWithoutGroupMembersInput;

    @Field(() => AccountUpsertWithoutGroupMembersInput, {nullable:true})
    @Type(() => AccountUpsertWithoutGroupMembersInput)
    upsert?: AccountUpsertWithoutGroupMembersInput;

    @Field(() => AccountWhereUniqueInput, {nullable:true})
    @Type(() => AccountWhereUniqueInput)
    connect?: Prisma.AtLeast<AccountWhereUniqueInput, 'id' | 'username'>;

    @Field(() => AccountUpdateToOneWithWhereWithoutGroupMembersInput, {nullable:true})
    @Type(() => AccountUpdateToOneWithWhereWithoutGroupMembersInput)
    update?: AccountUpdateToOneWithWhereWithoutGroupMembersInput;
}
