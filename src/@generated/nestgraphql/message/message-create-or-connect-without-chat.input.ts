import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { MessageWhereUniqueInput } from './message-where-unique.input';
import { Type } from 'class-transformer';
import { MessageCreateWithoutChatInput } from './message-create-without-chat.input';

@InputType()
export class MessageCreateOrConnectWithoutChatInput {

    @Field(() => MessageWhereUniqueInput, {nullable:false})
    @Type(() => MessageWhereUniqueInput)
    where!: Prisma.AtLeast<MessageWhereUniqueInput, 'id'>;

    @Field(() => MessageCreateWithoutChatInput, {nullable:false})
    @Type(() => MessageCreateWithoutChatInput)
    create!: MessageCreateWithoutChatInput;
}
