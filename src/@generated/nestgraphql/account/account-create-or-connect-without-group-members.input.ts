import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { AccountWhereUniqueInput } from './account-where-unique.input';
import { Type } from 'class-transformer';
import { AccountCreateWithoutGroupMembersInput } from './account-create-without-group-members.input';

@InputType()
export class AccountCreateOrConnectWithoutGroupMembersInput {

    @Field(() => AccountWhereUniqueInput, {nullable:false})
    @Type(() => AccountWhereUniqueInput)
    where!: Prisma.AtLeast<AccountWhereUniqueInput, 'id' | 'username'>;

    @Field(() => AccountCreateWithoutGroupMembersInput, {nullable:false})
    @Type(() => AccountCreateWithoutGroupMembersInput)
    create!: AccountCreateWithoutGroupMembersInput;
}
