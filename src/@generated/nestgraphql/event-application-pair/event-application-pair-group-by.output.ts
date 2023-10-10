import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { EventApplicationPairCountAggregate } from './event-application-pair-count-aggregate.output';
import { EventApplicationPairAvgAggregate } from './event-application-pair-avg-aggregate.output';
import { EventApplicationPairSumAggregate } from './event-application-pair-sum-aggregate.output';
import { EventApplicationPairMinAggregate } from './event-application-pair-min-aggregate.output';
import { EventApplicationPairMaxAggregate } from './event-application-pair-max-aggregate.output';

@ObjectType()
export class EventApplicationPairGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => Int, {nullable:false})
    eventId!: number;

    @Field(() => Int, {nullable:false})
    eventApplicationFirstId!: number;

    @Field(() => Int, {nullable:true})
    eventApplicationSecondId?: number;

    @Field(() => Int, {nullable:true})
    chatId?: number;

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
