import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { MessageUncheckedCreateNestedManyWithoutChatInput } from '../message/message-unchecked-create-nested-many-without-chat.input';
import { EventApplicationPairUncheckedCreateNestedManyWithoutChatInput } from '../event-application-pair/event-application-pair-unchecked-create-nested-many-without-chat.input';

@InputType()
export class ChatUncheckedCreateWithoutMembersInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => MessageUncheckedCreateNestedManyWithoutChatInput, {nullable:true})
    messages?: MessageUncheckedCreateNestedManyWithoutChatInput;

    @Field(() => EventApplicationPairUncheckedCreateNestedManyWithoutChatInput, {nullable:true})
    eventApplicationPair?: EventApplicationPairUncheckedCreateNestedManyWithoutChatInput;
}
