import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChatMemberRole } from '../prisma/chat-member-role.enum';
import { AccountCreateNestedOneWithoutChatMembersInput } from '../account/account-create-nested-one-without-chat-members.input';

@InputType()
export class ChatMemberCreateWithoutChatInput {

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => ChatMemberRole, {nullable:true})
    role?: keyof typeof ChatMemberRole;

    @Field(() => AccountCreateNestedOneWithoutChatMembersInput, {nullable:false})
    account!: AccountCreateNestedOneWithoutChatMembersInput;
}
