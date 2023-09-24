import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { MessageUncheckedUpdateManyWithoutChatNestedInput } from '../message/message-unchecked-update-many-without-chat-nested.input';
import { EventApplicationPairUncheckedUpdateManyWithoutChatNestedInput } from '../event-application-pair/event-application-pair-unchecked-update-many-without-chat-nested.input';

@InputType()
export class ChatUncheckedUpdateWithoutMembersInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => MessageUncheckedUpdateManyWithoutChatNestedInput, {nullable:true})
    messages?: MessageUncheckedUpdateManyWithoutChatNestedInput;

    @Field(() => EventApplicationPairUncheckedUpdateManyWithoutChatNestedInput, {nullable:true})
    eventApplicationPair?: EventApplicationPairUncheckedUpdateManyWithoutChatNestedInput;
}
