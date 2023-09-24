import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class EventApplicationPairScalarWhereWithAggregatesInput {

    @Field(() => [EventApplicationPairScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<EventApplicationPairScalarWhereWithAggregatesInput>;

    @Field(() => [EventApplicationPairScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<EventApplicationPairScalarWhereWithAggregatesInput>;

    @Field(() => [EventApplicationPairScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<EventApplicationPairScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    eventId?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    eventApplicationFirstId?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    eventApplicationSecondId?: IntWithAggregatesFilter;
}
