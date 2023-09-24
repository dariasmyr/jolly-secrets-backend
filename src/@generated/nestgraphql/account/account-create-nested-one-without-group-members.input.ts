import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AccountCreateWithoutGroupMembersInput } from './account-create-without-group-members.input';
import { Type } from 'class-transformer';
import { AccountCreateOrConnectWithoutGroupMembersInput } from './account-create-or-connect-without-group-members.input';
import { Prisma } from '@prisma/client';
import { AccountWhereUniqueInput } from './account-where-unique.input';

@InputType()
export class AccountCreateNestedOneWithoutGroupMembersInput {

    @Field(() => AccountCreateWithoutGroupMembersInput, {nullable:true})
    @Type(() => AccountCreateWithoutGroupMembersInput)
    create?: AccountCreateWithoutGroupMembersInput;

    @Field(() => AccountCreateOrConnectWithoutGroupMembersInput, {nullable:true})
    @Type(() => AccountCreateOrConnectWithoutGroupMembersInput)
    connectOrCreate?: AccountCreateOrConnectWithoutGroupMembersInput;

    @Field(() => AccountWhereUniqueInput, {nullable:true})
    @Type(() => AccountWhereUniqueInput)
    connect?: Prisma.AtLeast<AccountWhereUniqueInput, 'id' | 'username'>;
}
