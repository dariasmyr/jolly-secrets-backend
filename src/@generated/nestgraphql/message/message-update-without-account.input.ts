import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChatUpdateOneWithoutMessagesNestedInput } from '../chat/chat-update-one-without-messages-nested.input';

@InputType()
export class MessageUpdateWithoutAccountInput {

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => String, {nullable:true})
    text?: string;

    @Field(() => ChatUpdateOneWithoutMessagesNestedInput, {nullable:true})
    chat?: ChatUpdateOneWithoutMessagesNestedInput;
}
