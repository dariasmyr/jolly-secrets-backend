import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { AccountWhereUniqueInput } from './account-where-unique.input';
import { Type } from 'class-transformer';
import { AccountCreateWithoutChatMembersInput } from './account-create-without-chat-members.input';

@InputType()
export class AccountCreateOrConnectWithoutChatMembersInput {

    @Field(() => AccountWhereUniqueInput, {nullable:false})
    @Type(() => AccountWhereUniqueInput)
    where!: Prisma.AtLeast<AccountWhereUniqueInput, 'id' | 'username'>;

    @Field(() => AccountCreateWithoutChatMembersInput, {nullable:false})
    @Type(() => AccountCreateWithoutChatMembersInput)
    create!: AccountCreateWithoutChatMembersInput;
}
