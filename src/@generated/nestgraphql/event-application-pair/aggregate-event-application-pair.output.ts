import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { EventApplicationPairCountAggregate } from './event-application-pair-count-aggregate.output';
import { EventApplicationPairAvgAggregate } from './event-application-pair-avg-aggregate.output';
import { EventApplicationPairSumAggregate } from './event-application-pair-sum-aggregate.output';
import { EventApplicationPairMinAggregate } from './event-application-pair-min-aggregate.output';
import { EventApplicationPairMaxAggregate } from './event-application-pair-max-aggregate.output';

@ObjectType()
export class AggregateEventApplicationPair {

    @Field(() => EventApplicationPairCountAggregate, {nullable:true})
    _count?: EventApplicationPairCountAggregate;

    @Field(() => EventApplicationPairAvgAggregate, {nullable:true})
    _avg?: EventApplicationPairAvgAggregate;

    @Field(() => EventApplicationPairSumAggregate, {nullable:true})
    _sum?: EventApplicationPairSumAggregate;

    @Field(() => EventApplicationPairMinAggregate, {nullable:true})
    _min?: EventApplicationPairMinAggregate;

    @Field(() => EventApplicationPairMaxAggregate, {nullable:true})
    _max?: EventApplicationPairMaxAggregate;
}
