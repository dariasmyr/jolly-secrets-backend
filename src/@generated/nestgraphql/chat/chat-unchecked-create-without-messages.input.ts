import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ChatMemberUncheckedCreateNestedManyWithoutChatInput } from '../chat-member/chat-member-unchecked-create-nested-many-without-chat.input';
import { EventApplicationPairUncheckedCreateNestedManyWithoutChatInput } from '../event-application-pair/event-application-pair-unchecked-create-nested-many-without-chat.input';

@InputType()
export class ChatUncheckedCreateWithoutMessagesInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => ChatMemberUncheckedCreateNestedManyWithoutChatInput, {nullable:true})
    members?: ChatMemberUncheckedCreateNestedManyWithoutChatInput;

    @Field(() => EventApplicationPairUncheckedCreateNestedManyWithoutChatInput, {nullable:true})
    eventApplicationPair?: EventApplicationPairUncheckedCreateNestedManyWithoutChatInput;
}
