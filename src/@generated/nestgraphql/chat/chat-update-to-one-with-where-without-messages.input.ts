import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChatWhereInput } from './chat-where.input';
import { Type } from 'class-transformer';
import { ChatUpdateWithoutMessagesInput } from './chat-update-without-messages.input';

@InputType()
export class ChatUpdateToOneWithWhereWithoutMessagesInput {

    @Field(() => ChatWhereInput, {nullable:true})
    @Type(() => ChatWhereInput)
    where?: ChatWhereInput;

    @Field(() => ChatUpdateWithoutMessagesInput, {nullable:false})
    @Type(() => ChatUpdateWithoutMessagesInput)
    data!: ChatUpdateWithoutMessagesInput;
}
