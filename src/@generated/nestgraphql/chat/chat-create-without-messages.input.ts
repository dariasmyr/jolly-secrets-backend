import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChatMemberCreateNestedManyWithoutChatInput } from '../chat-member/chat-member-create-nested-many-without-chat.input';
import { EventApplicationPairCreateNestedManyWithoutChatInput } from '../event-application-pair/event-application-pair-create-nested-many-without-chat.input';

@InputType()
export class ChatCreateWithoutMessagesInput {

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => ChatMemberCreateNestedManyWithoutChatInput, {nullable:true})
    members?: ChatMemberCreateNestedManyWithoutChatInput;

    @Field(() => EventApplicationPairCreateNestedManyWithoutChatInput, {nullable:true})
    eventApplicationPair?: EventApplicationPairCreateNestedManyWithoutChatInput;
}
