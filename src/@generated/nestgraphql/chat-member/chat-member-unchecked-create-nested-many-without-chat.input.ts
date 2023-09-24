import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChatMemberCreateWithoutChatInput } from './chat-member-create-without-chat.input';
import { Type } from 'class-transformer';
import { ChatMemberCreateOrConnectWithoutChatInput } from './chat-member-create-or-connect-without-chat.input';
import { ChatMemberCreateManyChatInputEnvelope } from './chat-member-create-many-chat-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ChatMemberWhereUniqueInput } from './chat-member-where-unique.input';

@InputType()
export class ChatMemberUncheckedCreateNestedManyWithoutChatInput {

    @Field(() => [ChatMemberCreateWithoutChatInput], {nullable:true})
    @Type(() => ChatMemberCreateWithoutChatInput)
    create?: Array<ChatMemberCreateWithoutChatInput>;

    @Field(() => [ChatMemberCreateOrConnectWithoutChatInput], {nullable:true})
    @Type(() => ChatMemberCreateOrConnectWithoutChatInput)
    connectOrCreate?: Array<ChatMemberCreateOrConnectWithoutChatInput>;

    @Field(() => ChatMemberCreateManyChatInputEnvelope, {nullable:true})
    @Type(() => ChatMemberCreateManyChatInputEnvelope)
    createMany?: ChatMemberCreateManyChatInputEnvelope;

    @Field(() => [ChatMemberWhereUniqueInput], {nullable:true})
    @Type(() => ChatMemberWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ChatMemberWhereUniqueInput, 'id'>>;
}
