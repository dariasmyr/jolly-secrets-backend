import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MessageUpdateManyWithoutChatNestedInput } from '../message/message-update-many-without-chat-nested.input';
import { ChatMemberUpdateManyWithoutChatNestedInput } from '../chat-member/chat-member-update-many-without-chat-nested.input';
import { EventApplicationPairUpdateManyWithoutChatNestedInput } from '../event-application-pair/event-application-pair-update-many-without-chat-nested.input';

@InputType()
export class ChatUpdateInput {

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => MessageUpdateManyWithoutChatNestedInput, {nullable:true})
    messages?: MessageUpdateManyWithoutChatNestedInput;

    @Field(() => ChatMemberUpdateManyWithoutChatNestedInput, {nullable:true})
    members?: ChatMemberUpdateManyWithoutChatNestedInput;

    @Field(() => EventApplicationPairUpdateManyWithoutChatNestedInput, {nullable:true})
    eventApplicationPair?: EventApplicationPairUpdateManyWithoutChatNestedInput;
}
