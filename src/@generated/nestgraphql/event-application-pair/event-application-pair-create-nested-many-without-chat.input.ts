import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventApplicationPairCreateWithoutChatInput } from './event-application-pair-create-without-chat.input';
import { Type } from 'class-transformer';
import { EventApplicationPairCreateOrConnectWithoutChatInput } from './event-application-pair-create-or-connect-without-chat.input';
import { EventApplicationPairCreateManyChatInputEnvelope } from './event-application-pair-create-many-chat-input-envelope.input';
import { Prisma } from '@prisma/client';
import { EventApplicationPairWhereUniqueInput } from './event-application-pair-where-unique.input';

@InputType()
export class EventApplicationPairCreateNestedManyWithoutChatInput {

    @Field(() => [EventApplicationPairCreateWithoutChatInput], {nullable:true})
    @Type(() => EventApplicationPairCreateWithoutChatInput)
    create?: Array<EventApplicationPairCreateWithoutChatInput>;

    @Field(() => [EventApplicationPairCreateOrConnectWithoutChatInput], {nullable:true})
    @Type(() => EventApplicationPairCreateOrConnectWithoutChatInput)
    connectOrCreate?: Array<EventApplicationPairCreateOrConnectWithoutChatInput>;

    @Field(() => EventApplicationPairCreateManyChatInputEnvelope, {nullable:true})
    @Type(() => EventApplicationPairCreateManyChatInputEnvelope)
    createMany?: EventApplicationPairCreateManyChatInputEnvelope;

    @Field(() => [EventApplicationPairWhereUniqueInput], {nullable:true})
    @Type(() => EventApplicationPairWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<EventApplicationPairWhereUniqueInput, 'id'>>;
}
