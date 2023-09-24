import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { NotificationCountAggregate } from './notification-count-aggregate.output';
import { NotificationAvgAggregate } from './notification-avg-aggregate.output';
import { NotificationSumAggregate } from './notification-sum-aggregate.output';
import { NotificationMinAggregate } from './notification-min-aggregate.output';
import { NotificationMaxAggregate } from './notification-max-aggregate.output';

@ObjectType()
export class AggregateNotification {

    @Field(() => NotificationCountAggregate, {nullable:true})
    _count?: NotificationCountAggregate;

    @Field(() => NotificationAvgAggregate, {nullable:true})
    _avg?: NotificationAvgAggregate;

    @Field(() => NotificationSumAggregate, {nullable:true})
    _sum?: NotificationSumAggregate;

    @Field(() => NotificationMinAggregate, {nullable:true})
    _min?: NotificationMinAggregate;

    @Field(() => NotificationMaxAggregate, {nullable:true})
    _max?: NotificationMaxAggregate;
}
