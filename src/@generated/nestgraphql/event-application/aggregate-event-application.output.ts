import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { EventApplicationCountAggregate } from './event-application-count-aggregate.output';
import { EventApplicationAvgAggregate } from './event-application-avg-aggregate.output';
import { EventApplicationSumAggregate } from './event-application-sum-aggregate.output';
import { EventApplicationMinAggregate } from './event-application-min-aggregate.output';
import { EventApplicationMaxAggregate } from './event-application-max-aggregate.output';

@ObjectType()
export class AggregateEventApplication {

    @Field(() => EventApplicationCountAggregate, {nullable:true})
    _count?: EventApplicationCountAggregate;

    @Field(() => EventApplicationAvgAggregate, {nullable:true})
    _avg?: EventApplicationAvgAggregate;

    @Field(() => EventApplicationSumAggregate, {nullable:true})
    _sum?: EventApplicationSumAggregate;

    @Field(() => EventApplicationMinAggregate, {nullable:true})
    _min?: EventApplicationMinAggregate;

    @Field(() => EventApplicationMaxAggregate, {nullable:true})
    _max?: EventApplicationMaxAggregate;
}
