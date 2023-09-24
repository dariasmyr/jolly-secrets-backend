import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AccountCreateWithoutChatMembersInput } from './account-create-without-chat-members.input';
import { Type } from 'class-transformer';
import { AccountCreateOrConnectWithoutChatMembersInput } from './account-create-or-connect-without-chat-members.input';
import { Prisma } from '@prisma/client';
import { AccountWhereUniqueInput } from './account-where-unique.input';

@InputType()
export class AccountCreateNestedOneWithoutChatMembersInput {

    @Field(() => AccountCreateWithoutChatMembersInput, {nullable:true})
    @Type(() => AccountCreateWithoutChatMembersInput)
    create?: AccountCreateWithoutChatMembersInput;

    @Field(() => AccountCreateOrConnectWithoutChatMembersInput, {nullable:true})
    @Type(() => AccountCreateOrConnectWithoutChatMembersInput)
    connectOrCreate?: AccountCreateOrConnectWithoutChatMembersInput;

    @Field(() => AccountWhereUniqueInput, {nullable:true})
    @Type(() => AccountWhereUniqueInput)
    connect?: Prisma.AtLeast<AccountWhereUniqueInput, 'id' | 'username'>;
}
