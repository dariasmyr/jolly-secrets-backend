import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EventApplicationWhereInput } from './event-application-where.input';
import { Type } from 'class-transformer';
import { EventApplicationOrderByWithAggregationInput } from './event-application-order-by-with-aggregation.input';
import { EventApplicationScalarFieldEnum } from './event-application-scalar-field.enum';
import { EventApplicationScalarWhereWithAggregatesInput } from './event-application-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { EventApplicationCountAggregateInput } from './event-application-count-aggregate.input';
import { EventApplicationAvgAggregateInput } from './event-application-avg-aggregate.input';
import { EventApplicationSumAggregateInput } from './event-application-sum-aggregate.input';
import { EventApplicationMinAggregateInput } from './event-application-min-aggregate.input';
import { EventApplicationMaxAggregateInput } from './event-application-max-aggregate.input';

@ArgsType()
export class EventApplicationGroupByArgs {

    @Field(() => EventApplicationWhereInput, {nullable:true})
    @Type(() => EventApplicationWhereInput)
    where?: EventApplicationWhereInput;

    @Field(() => [EventApplicationOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<EventApplicationOrderByWithAggregationInput>;

    @Field(() => [EventApplicationScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof EventApplicationScalarFieldEnum>;

    @Field(() => EventApplicationScalarWhereWithAggregatesInput, {nullable:true})
    having?: EventApplicationScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => EventApplicationCountAggregateInput, {nullable:true})
    _count?: EventApplicationCountAggregateInput;

    @Field(() => EventApplicationAvgAggregateInput, {nullable:true})
    _avg?: EventApplicationAvgAggregateInput;

    @Field(() => EventApplicationSumAggregateInput, {nullable:true})
    _sum?: EventApplicationSumAggregateInput;

    @Field(() => EventApplicationMinAggregateInput, {nullable:true})
    _min?: EventApplicationMinAggregateInput;

    @Field(() => EventApplicationMaxAggregateInput, {nullable:true})
    _max?: EventApplicationMaxAggregateInput;
}
