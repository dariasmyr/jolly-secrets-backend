import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ChatMemberWhereUniqueInput } from './chat-member-where-unique.input';
import { Type } from 'class-transformer';
import { ChatMemberUpdateWithoutChatInput } from './chat-member-update-without-chat.input';

@InputType()
export class ChatMemberUpdateWithWhereUniqueWithoutChatInput {

    @Field(() => ChatMemberWhereUniqueInput, {nullable:false})
    @Type(() => ChatMemberWhereUniqueInput)
    where!: Prisma.AtLeast<ChatMemberWhereUniqueInput, 'id'>;

    @Field(() => ChatMemberUpdateWithoutChatInput, {nullable:false})
    @Type(() => ChatMemberUpdateWithoutChatInput)
    data!: ChatMemberUpdateWithoutChatInput;
}
