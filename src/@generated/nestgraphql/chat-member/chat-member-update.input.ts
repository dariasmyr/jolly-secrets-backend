import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChatMemberRole } from '../prisma/chat-member-role.enum';
import { AccountUpdateOneRequiredWithoutChatMembersNestedInput } from '../account/account-update-one-required-without-chat-members-nested.input';
import { ChatUpdateOneWithoutMembersNestedInput } from '../chat/chat-update-one-without-members-nested.input';

@InputType()
export class ChatMemberUpdateInput {

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => ChatMemberRole, {nullable:true})
    role?: keyof typeof ChatMemberRole;

    @Field(() => AccountUpdateOneRequiredWithoutChatMembersNestedInput, {nullable:true})
    account?: AccountUpdateOneRequiredWithoutChatMembersNestedInput;

    @Field(() => ChatUpdateOneWithoutMembersNestedInput, {nullable:true})
    chat?: ChatUpdateOneWithoutMembersNestedInput;
}
