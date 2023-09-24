import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChatMemberRole } from '../prisma/chat-member-role.enum';
import { AccountCreateNestedOneWithoutChatMembersInput } from '../account/account-create-nested-one-without-chat-members.input';
import { ChatCreateNestedOneWithoutMembersInput } from '../chat/chat-create-nested-one-without-members.input';

@InputType()
export class ChatMemberCreateInput {

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => ChatMemberRole, {nullable:true})
    role?: keyof typeof ChatMemberRole;

    @Field(() => AccountCreateNestedOneWithoutChatMembersInput, {nullable:false})
    account!: AccountCreateNestedOneWithoutChatMembersInput;

    @Field(() => ChatCreateNestedOneWithoutMembersInput, {nullable:true})
    chat?: ChatCreateNestedOneWithoutMembersInput;
}
