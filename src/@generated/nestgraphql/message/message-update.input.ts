import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AccountUpdateOneRequiredWithoutMessagesNestedInput } from '../account/account-update-one-required-without-messages-nested.input';
import { ChatUpdateOneWithoutMessagesNestedInput } from '../chat/chat-update-one-without-messages-nested.input';

@InputType()
export class MessageUpdateInput {

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => String, {nullable:true})
    text?: string;

    @Field(() => AccountUpdateOneRequiredWithoutMessagesNestedInput, {nullable:true})
    account?: AccountUpdateOneRequiredWithoutMessagesNestedInput;

    @Field(() => ChatUpdateOneWithoutMessagesNestedInput, {nullable:true})
    chat?: ChatUpdateOneWithoutMessagesNestedInput;
}
