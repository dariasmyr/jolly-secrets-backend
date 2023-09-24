import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { EventApplicationPairWhereInput } from './event-application-pair-where.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { EventRelationFilter } from '../event/event-relation-filter.input';
import { EventApplicationRelationFilter } from '../event-application/event-application-relation-filter.input';
import { ChatRelationFilter } from '../chat/chat-relation-filter.input';

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

    @Field(() => IntFilter, {nullable:true})
    eventApplicationSecondId?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    chatId?: IntFilter;

    @Field(() => EventRelationFilter, {nullable:true})
    event?: EventRelationFilter;

    @Field(() => EventApplicationRelationFilter, {nullable:true})
    applicationFirst?: EventApplicationRelationFilter;

    @Field(() => EventApplicationRelationFilter, {nullable:true})
    applicationSecond?: EventApplicationRelationFilter;

    @Field(() => ChatRelationFilter, {nullable:true})
    chat?: ChatRelationFilter;
}
