import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ChatWhereUniqueInput } from './chat-where-unique.input';
import { Type } from 'class-transformer';
import { ChatCreateWithoutMessagesInput } from './chat-create-without-messages.input';

@InputType()
export class ChatCreateOrConnectWithoutMessagesInput {

    @Field(() => ChatWhereUniqueInput, {nullable:false})
    @Type(() => ChatWhereUniqueInput)
    where!: Prisma.AtLeast<ChatWhereUniqueInput, 'id'>;

    @Field(() => ChatCreateWithoutMessagesInput, {nullable:false})
    @Type(() => ChatCreateWithoutMessagesInput)
    create!: ChatCreateWithoutMessagesInput;
}
