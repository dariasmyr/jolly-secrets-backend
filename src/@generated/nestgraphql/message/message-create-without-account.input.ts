import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChatCreateNestedOneWithoutMessagesInput } from '../chat/chat-create-nested-one-without-messages.input';

@InputType()
export class MessageCreateWithoutAccountInput {

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => String, {nullable:false})
    text!: string;

    @Field(() => ChatCreateNestedOneWithoutMessagesInput, {nullable:true})
    chat?: ChatCreateNestedOneWithoutMessagesInput;
}
