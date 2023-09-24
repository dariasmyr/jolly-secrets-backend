import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EventApplicationPairWhereInput } from './event-application-pair-where.input';
import { Type } from 'class-transformer';
import { EventApplicationPairOrderByWithAggregationInput } from './event-application-pair-order-by-with-aggregation.input';
import { EventApplicationPairScalarFieldEnum } from './event-application-pair-scalar-field.enum';
import { EventApplicationPairScalarWhereWithAggregatesInput } from './event-application-pair-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { EventApplicationPairCountAggregateInput } from './event-application-pair-count-aggregate.input';
import { EventApplicationPairAvgAggregateInput } from './event-application-pair-avg-aggregate.input';
import { EventApplicationPairSumAggregateInput } from './event-application-pair-sum-aggregate.input';
import { EventApplicationPairMinAggregateInput } from './event-application-pair-min-aggregate.input';
import { EventApplicationPairMaxAggregateInput } from './event-application-pair-max-aggregate.input';

@ArgsType()
export class EventApplicationPairGroupByArgs {

    @Field(() => EventApplicationPairWhereInput, {nullable:true})
    @Type(() => EventApplicationPairWhereInput)
    where?: EventApplicationPairWhereInput;

    @Field(() => [EventApplicationPairOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<EventApplicationPairOrderByWithAggregationInput>;

    @Field(() => [EventApplicationPairScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof EventApplicationPairScalarFieldEnum>;

    @Field(() => EventApplicationPairScalarWhereWithAggregatesInput, {nullable:true})
    having?: EventApplicationPairScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => EventApplicationPairCountAggregateInput, {nullable:true})
    _count?: EventApplicationPairCountAggregateInput;

    @Field(() => EventApplicationPairAvgAggregateInput, {nullable:true})
    _avg?: EventApplicationPairAvgAggregateInput;

    @Field(() => EventApplicationPairSumAggregateInput, {nullable:true})
    _sum?: EventApplicationPairSumAggregateInput;

    @Field(() => EventApplicationPairMinAggregateInput, {nullable:true})
    _min?: EventApplicationPairMinAggregateInput;

    @Field(() => EventApplicationPairMaxAggregateInput, {nullable:true})
    _max?: EventApplicationPairMaxAggregateInput;
}
