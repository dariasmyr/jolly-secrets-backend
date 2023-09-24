import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AccountUpdateWithoutChatMembersInput } from './account-update-without-chat-members.input';
import { Type } from 'class-transformer';
import { AccountCreateWithoutChatMembersInput } from './account-create-without-chat-members.input';
import { AccountWhereInput } from './account-where.input';

@InputType()
export class AccountUpsertWithoutChatMembersInput {

    @Field(() => AccountUpdateWithoutChatMembersInput, {nullable:false})
    @Type(() => AccountUpdateWithoutChatMembersInput)
    update!: AccountUpdateWithoutChatMembersInput;

    @Field(() => AccountCreateWithoutChatMembersInput, {nullable:false})
    @Type(() => AccountCreateWithoutChatMembersInput)
    create!: AccountCreateWithoutChatMembersInput;

    @Field(() => AccountWhereInput, {nullable:true})
    @Type(() => AccountWhereInput)
    where?: AccountWhereInput;
}
