import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AccountWhereInput } from './account-where.input';
import { Type } from 'class-transformer';
import { AccountUpdateWithoutChatMembersInput } from './account-update-without-chat-members.input';

@InputType()
export class AccountUpdateToOneWithWhereWithoutChatMembersInput {

    @Field(() => AccountWhereInput, {nullable:true})
    @Type(() => AccountWhereInput)
    where?: AccountWhereInput;

    @Field(() => AccountUpdateWithoutChatMembersInput, {nullable:false})
    @Type(() => AccountUpdateWithoutChatMembersInput)
    data!: AccountUpdateWithoutChatMembersInput;
}
