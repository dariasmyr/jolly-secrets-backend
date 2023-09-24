import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { MessageWhereUniqueInput } from './message-where-unique.input';
import { Type } from 'class-transformer';
import { MessageUpdateWithoutChatInput } from './message-update-without-chat.input';

@InputType()
export class MessageUpdateWithWhereUniqueWithoutChatInput {

    @Field(() => MessageWhereUniqueInput, {nullable:false})
    @Type(() => MessageWhereUniqueInput)
    where!: Prisma.AtLeast<MessageWhereUniqueInput, 'id'>;

    @Field(() => MessageUpdateWithoutChatInput, {nullable:false})
    @Type(() => MessageUpdateWithoutChatInput)
    data!: MessageUpdateWithoutChatInput;
}
