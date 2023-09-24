import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ChatMemberUncheckedUpdateManyWithoutChatNestedInput } from '../chat-member/chat-member-unchecked-update-many-without-chat-nested.input';
import { EventApplicationPairUncheckedUpdateManyWithoutChatNestedInput } from '../event-application-pair/event-application-pair-unchecked-update-many-without-chat-nested.input';

@InputType()
export class ChatUncheckedUpdateWithoutMessagesInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => ChatMemberUncheckedUpdateManyWithoutChatNestedInput, {nullable:true})
    members?: ChatMemberUncheckedUpdateManyWithoutChatNestedInput;

    @Field(() => EventApplicationPairUncheckedUpdateManyWithoutChatNestedInput, {nullable:true})
    eventApplicationPair?: EventApplicationPairUncheckedUpdateManyWithoutChatNestedInput;
}
