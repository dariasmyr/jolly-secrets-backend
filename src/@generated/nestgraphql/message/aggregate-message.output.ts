import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { MessageCountAggregate } from './message-count-aggregate.output';
import { MessageAvgAggregate } from './message-avg-aggregate.output';
import { MessageSumAggregate } from './message-sum-aggregate.output';
import { MessageMinAggregate } from './message-min-aggregate.output';
import { MessageMaxAggregate } from './message-max-aggregate.output';

@ObjectType()
export class AggregateMessage {

    @Field(() => MessageCountAggregate, {nullable:true})
    _count?: MessageCountAggregate;

    @Field(() => MessageAvgAggregate, {nullable:true})
    _avg?: MessageAvgAggregate;

    @Field(() => MessageSumAggregate, {nullable:true})
    _sum?: MessageSumAggregate;

    @Field(() => MessageMinAggregate, {nullable:true})
    _min?: MessageMinAggregate;

    @Field(() => MessageMaxAggregate, {nullable:true})
    _max?: MessageMaxAggregate;
}
