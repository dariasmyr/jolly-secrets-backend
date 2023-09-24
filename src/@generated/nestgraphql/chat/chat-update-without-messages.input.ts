import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChatMemberUpdateManyWithoutChatNestedInput } from '../chat-member/chat-member-update-many-without-chat-nested.input';
import { EventApplicationPairUpdateManyWithoutChatNestedInput } from '../event-application-pair/event-application-pair-update-many-without-chat-nested.input';

@InputType()
export class ChatUpdateWithoutMessagesInput {

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => ChatMemberUpdateManyWithoutChatNestedInput, {nullable:true})
    members?: ChatMemberUpdateManyWithoutChatNestedInput;

    @Field(() => EventApplicationPairUpdateManyWithoutChatNestedInput, {nullable:true})
    eventApplicationPair?: EventApplicationPairUpdateManyWithoutChatNestedInput;
}
