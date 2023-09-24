import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ChatMemberWhereUniqueInput } from './chat-member-where-unique.input';
import { Type } from 'class-transformer';
import { ChatMemberCreateWithoutChatInput } from './chat-member-create-without-chat.input';

@InputType()
export class ChatMemberCreateOrConnectWithoutChatInput {

    @Field(() => ChatMemberWhereUniqueInput, {nullable:false})
    @Type(() => ChatMemberWhereUniqueInput)
    where!: Prisma.AtLeast<ChatMemberWhereUniqueInput, 'id'>;

    @Field(() => ChatMemberCreateWithoutChatInput, {nullable:false})
    @Type(() => ChatMemberCreateWithoutChatInput)
    create!: ChatMemberCreateWithoutChatInput;
}
