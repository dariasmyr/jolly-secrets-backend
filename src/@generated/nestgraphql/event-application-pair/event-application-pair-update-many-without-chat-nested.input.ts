import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventApplicationPairCreateWithoutChatInput } from './event-application-pair-create-without-chat.input';
import { Type } from 'class-transformer';
import { EventApplicationPairCreateOrConnectWithoutChatInput } from './event-application-pair-create-or-connect-without-chat.input';
import { EventApplicationPairUpsertWithWhereUniqueWithoutChatInput } from './event-application-pair-upsert-with-where-unique-without-chat.input';
import { EventApplicationPairCreateManyChatInputEnvelope } from './event-application-pair-create-many-chat-input-envelope.input';
import { Prisma } from '@prisma/client';
import { EventApplicationPairWhereUniqueInput } from './event-application-pair-where-unique.input';
import { EventApplicationPairUpdateWithWhereUniqueWithoutChatInput } from './event-application-pair-update-with-where-unique-without-chat.input';
import { EventApplicationPairUpdateManyWithWhereWithoutChatInput } from './event-application-pair-update-many-with-where-without-chat.input';
import { EventApplicationPairScalarWhereInput } from './event-application-pair-scalar-where.input';

@InputType()
export class EventApplicationPairUpdateManyWithoutChatNestedInput {

    @Field(() => [EventApplicationPairCreateWithoutChatInput], {nullable:true})
    @Type(() => EventApplicationPairCreateWithoutChatInput)
    create?: Array<EventApplicationPairCreateWithoutChatInput>;

    @Field(() => [EventApplicationPairCreateOrConnectWithoutChatInput], {nullable:true})
    @Type(() => EventApplicationPairCreateOrConnectWithoutChatInput)
    connectOrCreate?: Array<EventApplicationPairCreateOrConnectWithoutChatInput>;

    @Field(() => [EventApplicationPairUpsertWithWhereUniqueWithoutChatInput], {nullable:true})
    @Type(() => EventApplicationPairUpsertWithWhereUniqueWithoutChatInput)
    upsert?: Array<EventApplicationPairUpsertWithWhereUniqueWithoutChatInput>;

    @Field(() => EventApplicationPairCreateManyChatInputEnvelope, {nullable:true})
    @Type(() => EventApplicationPairCreateManyChatInputEnvelope)
    createMany?: EventApplicationPairCreateManyChatInputEnvelope;

    @Field(() => [EventApplicationPairWhereUniqueInput], {nullable:true})
    @Type(() => EventApplicationPairWhereUniqueInput)
    set?: Array<Prisma.AtLeast<EventApplicationPairWhereUniqueInput, 'id'>>;

    @Field(() => [EventApplicationPairWhereUniqueInput], {nullable:true})
    @Type(() => EventApplicationPairWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<EventApplicationPairWhereUniqueInput, 'id'>>;

    @Field(() => [EventApplicationPairWhereUniqueInput], {nullable:true})
    @Type(() => EventApplicationPairWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<EventApplicationPairWhereUniqueInput, 'id'>>;

    @Field(() => [EventApplicationPairWhereUniqueInput], {nullable:true})
    @Type(() => EventApplicationPairWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<EventApplicationPairWhereUniqueInput, 'id'>>;

    @Field(() => [EventApplicationPairUpdateWithWhereUniqueWithoutChatInput], {nullable:true})
    @Type(() => EventApplicationPairUpdateWithWhereUniqueWithoutChatInput)
    update?: Array<EventApplicationPairUpdateWithWhereUniqueWithoutChatInput>;

    @Field(() => [EventApplicationPairUpdateManyWithWhereWithoutChatInput], {nullable:true})
    @Type(() => EventApplicationPairUpdateManyWithWhereWithoutChatInput)
    updateMany?: Array<EventApplicationPairUpdateManyWithWhereWithoutChatInput>;

    @Field(() => [EventApplicationPairScalarWhereInput], {nullable:true})
    @Type(() => EventApplicationPairScalarWhereInput)
    deleteMany?: Array<EventApplicationPairScalarWhereInput>;
}
