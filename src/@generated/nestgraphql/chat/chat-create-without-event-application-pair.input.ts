import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MessageCreateNestedManyWithoutChatInput } from '../message/message-create-nested-many-without-chat.input';
import { ChatMemberCreateNestedManyWithoutChatInput } from '../chat-member/chat-member-create-nested-many-without-chat.input';

@InputType()
export class ChatCreateWithoutEventApplicationPairInput {

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => MessageCreateNestedManyWithoutChatInput, {nullable:true})
    messages?: MessageCreateNestedManyWithoutChatInput;

    @Field(() => ChatMemberCreateNestedManyWithoutChatInput, {nullable:true})
    members?: ChatMemberCreateNestedManyWithoutChatInput;
}
