import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { EnumEventApplicationStatusWithAggregatesFilter } from '../prisma/enum-event-application-status-with-aggregates-filter.input';

@InputType()
export class EventApplicationScalarWhereWithAggregatesInput {

    @Field(() => [EventApplicationScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<EventApplicationScalarWhereWithAggregatesInput>;

    @Field(() => [EventApplicationScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<EventApplicationScalarWhereWithAggregatesInput>;

    @Field(() => [EventApplicationScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<EventApplicationScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    accountId?: IntWithAggregatesFilter;

    @Field(() => EnumEventApplicationStatusWithAggregatesFilter, {nullable:true})
    status?: EnumEventApplicationStatusWithAggregatesFilter;
}
