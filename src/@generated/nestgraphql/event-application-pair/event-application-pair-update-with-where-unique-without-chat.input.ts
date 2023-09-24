import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { EventApplicationPairWhereUniqueInput } from './event-application-pair-where-unique.input';
import { Type } from 'class-transformer';
import { EventApplicationPairUpdateWithoutChatInput } from './event-application-pair-update-without-chat.input';

@InputType()
export class EventApplicationPairUpdateWithWhereUniqueWithoutChatInput {

    @Field(() => EventApplicationPairWhereUniqueInput, {nullable:false})
    @Type(() => EventApplicationPairWhereUniqueInput)
    where!: Prisma.AtLeast<EventApplicationPairWhereUniqueInput, 'id'>;

    @Field(() => EventApplicationPairUpdateWithoutChatInput, {nullable:false})
    @Type(() => EventApplicationPairUpdateWithoutChatInput)
    data!: EventApplicationPairUpdateWithoutChatInput;
}
