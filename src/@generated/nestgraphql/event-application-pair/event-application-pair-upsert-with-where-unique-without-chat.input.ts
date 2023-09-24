import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { EventApplicationPairWhereUniqueInput } from './event-application-pair-where-unique.input';
import { Type } from 'class-transformer';
import { EventApplicationPairUpdateWithoutChatInput } from './event-application-pair-update-without-chat.input';
import { EventApplicationPairCreateWithoutChatInput } from './event-application-pair-create-without-chat.input';

@InputType()
export class EventApplicationPairUpsertWithWhereUniqueWithoutChatInput {

    @Field(() => EventApplicationPairWhereUniqueInput, {nullable:false})
    @Type(() => EventApplicationPairWhereUniqueInput)
    where!: Prisma.AtLeast<EventApplicationPairWhereUniqueInput, 'id'>;

    @Field(() => EventApplicationPairUpdateWithoutChatInput, {nullable:false})
    @Type(() => EventApplicationPairUpdateWithoutChatInput)
    update!: EventApplicationPairUpdateWithoutChatInput;

    @Field(() => EventApplicationPairCreateWithoutChatInput, {nullable:false})
    @Type(() => EventApplicationPairCreateWithoutChatInput)
    create!: EventApplicationPairCreateWithoutChatInput;
}
