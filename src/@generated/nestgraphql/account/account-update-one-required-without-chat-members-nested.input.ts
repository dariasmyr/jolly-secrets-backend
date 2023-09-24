import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AccountCreateWithoutChatMembersInput } from './account-create-without-chat-members.input';
import { Type } from 'class-transformer';
import { AccountCreateOrConnectWithoutChatMembersInput } from './account-create-or-connect-without-chat-members.input';
import { AccountUpsertWithoutChatMembersInput } from './account-upsert-without-chat-members.input';
import { Prisma } from '@prisma/client';
import { AccountWhereUniqueInput } from './account-where-unique.input';
import { AccountUpdateToOneWithWhereWithoutChatMembersInput } from './account-update-to-one-with-where-without-chat-members.input';

@InputType()
export class AccountUpdateOneRequiredWithoutChatMembersNestedInput {

    @Field(() => AccountCreateWithoutChatMembersInput, {nullable:true})
    @Type(() => AccountCreateWithoutChatMembersInput)
    create?: AccountCreateWithoutChatMembersInput;

    @Field(() => AccountCreateOrConnectWithoutChatMembersInput, {nullable:true})
    @Type(() => AccountCreateOrConnectWithoutChatMembersInput)
    connectOrCreate?: AccountCreateOrConnectWithoutChatMembersInput;

    @Field(() => AccountUpsertWithoutChatMembersInput, {nullable:true})
    @Type(() => AccountUpsertWithoutChatMembersInput)
    upsert?: AccountUpsertWithoutChatMembersInput;

    @Field(() => AccountWhereUniqueInput, {nullable:true})
    @Type(() => AccountWhereUniqueInput)
    connect?: Prisma.AtLeast<AccountWhereUniqueInput, 'id' | 'username'>;

    @Field(() => AccountUpdateToOneWithWhereWithoutChatMembersInput, {nullable:true})
    @Type(() => AccountUpdateToOneWithWhereWithoutChatMembersInput)
    update?: AccountUpdateToOneWithWhereWithoutChatMembersInput;
}
