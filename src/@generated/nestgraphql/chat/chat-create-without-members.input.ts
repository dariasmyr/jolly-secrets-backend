import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MessageCreateNestedManyWithoutChatInput } from '../message/message-create-nested-many-without-chat.input';
import { EventApplicationPairCreateNestedManyWithoutChatInput } from '../event-application-pair/event-application-pair-create-nested-many-without-chat.input';

@InputType()
export class ChatCreateWithoutMembersInput {

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => MessageCreateNestedManyWithoutChatInput, {nullable:true})
    messages?: MessageCreateNestedManyWithoutChatInput;

    @Field(() => EventApplicationPairCreateNestedManyWithoutChatInput, {nullable:true})
    eventApplicationPair?: EventApplicationPairCreateNestedManyWithoutChatInput;
}
