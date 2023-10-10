import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { EventApplicationPairWhereInput } from './event-application-pair-where.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { EventRelationFilter } from '../event/event-relation-filter.input';
import { EventApplicationRelationFilter } from '../event-application/event-application-relation-filter.input';
import { EventApplicationNullableRelationFilter } from '../event-application/event-application-nullable-relation-filter.input';
import { ChatNullableRelationFilter } from '../chat/chat-nullable-relation-filter.input';

@InputType()
export class EventApplicationPairWhereUniqueInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => [EventApplicationPairWhereInput], {nullable:true})
    AND?: Array<EventApplicationPairWhereInput>;

    @Field(() => [EventApplicationPairWhereInput], {nullable:true})
    OR?: Array<EventApplicationPairWhereInput>;

    @Field(() => [EventApplicationPairWhereInput], {nullable:true})
    NOT?: Array<EventApplicationPairWhereInput>;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => IntFilter, {nullable:true})
    eventId?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    eventApplicationFirstId?: IntFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    eventApplicationSecondId?: IntNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    chatId?: IntNullableFilter;

    @Field(() => EventRelationFilter, {nullable:true})
    event?: EventRelationFilter;

    @Field(() => EventApplicationRelationFilter, {nullable:true})
    applicationFirst?: EventApplicationRelationFilter;

    @Field(() => EventApplicationNullableRelationFilter, {nullable:true})
    applicationSecond?: EventApplicationNullableRelationFilter;

    @Field(() => ChatNullableRelationFilter, {nullable:true})
    chat?: ChatNullableRelationFilter;
}
