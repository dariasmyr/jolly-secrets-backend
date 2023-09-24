import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChatMemberCreateWithoutChatInput } from './chat-member-create-without-chat.input';
import { Type } from 'class-transformer';
import { ChatMemberCreateOrConnectWithoutChatInput } from './chat-member-create-or-connect-without-chat.input';
import { ChatMemberUpsertWithWhereUniqueWithoutChatInput } from './chat-member-upsert-with-where-unique-without-chat.input';
import { ChatMemberCreateManyChatInputEnvelope } from './chat-member-create-many-chat-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ChatMemberWhereUniqueInput } from './chat-member-where-unique.input';
import { ChatMemberUpdateWithWhereUniqueWithoutChatInput } from './chat-member-update-with-where-unique-without-chat.input';
import { ChatMemberUpdateManyWithWhereWithoutChatInput } from './chat-member-update-many-with-where-without-chat.input';
import { ChatMemberScalarWhereInput } from './chat-member-scalar-where.input';

@InputType()
export class ChatMemberUpdateManyWithoutChatNestedInput {

    @Field(() => [ChatMemberCreateWithoutChatInput], {nullable:true})
    @Type(() => ChatMemberCreateWithoutChatInput)
    create?: Array<ChatMemberCreateWithoutChatInput>;

    @Field(() => [ChatMemberCreateOrConnectWithoutChatInput], {nullable:true})
    @Type(() => ChatMemberCreateOrConnectWithoutChatInput)
    connectOrCreate?: Array<ChatMemberCreateOrConnectWithoutChatInput>;

    @Field(() => [ChatMemberUpsertWithWhereUniqueWithoutChatInput], {nullable:true})
    @Type(() => ChatMemberUpsertWithWhereUniqueWithoutChatInput)
    upsert?: Array<ChatMemberUpsertWithWhereUniqueWithoutChatInput>;

    @Field(() => ChatMemberCreateManyChatInputEnvelope, {nullable:true})
    @Type(() => ChatMemberCreateManyChatInputEnvelope)
    createMany?: ChatMemberCreateManyChatInputEnvelope;

    @Field(() => [ChatMemberWhereUniqueInput], {nullable:true})
    @Type(() => ChatMemberWhereUniqueInput)
    set?: Array<Prisma.AtLeast<ChatMemberWhereUniqueInput, 'id'>>;

    @Field(() => [ChatMemberWhereUniqueInput], {nullable:true})
    @Type(() => ChatMemberWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<ChatMemberWhereUniqueInput, 'id'>>;

    @Field(() => [ChatMemberWhereUniqueInput], {nullable:true})
    @Type(() => ChatMemberWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<ChatMemberWhereUniqueInput, 'id'>>;

    @Field(() => [ChatMemberWhereUniqueInput], {nullable:true})
    @Type(() => ChatMemberWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ChatMemberWhereUniqueInput, 'id'>>;

    @Field(() => [ChatMemberUpdateWithWhereUniqueWithoutChatInput], {nullable:true})
    @Type(() => ChatMemberUpdateWithWhereUniqueWithoutChatInput)
    update?: Array<ChatMemberUpdateWithWhereUniqueWithoutChatInput>;

    @Field(() => [ChatMemberUpdateManyWithWhereWithoutChatInput], {nullable:true})
    @Type(() => ChatMemberUpdateManyWithWhereWithoutChatInput)
    updateMany?: Array<ChatMemberUpdateManyWithWhereWithoutChatInput>;

    @Field(() => [ChatMemberScalarWhereInput], {nullable:true})
    @Type(() => ChatMemberScalarWhereInput)
    deleteMany?: Array<ChatMemberScalarWhereInput>;
}
