import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { PreferenceCountAggregate } from './preference-count-aggregate.output';
import { PreferenceAvgAggregate } from './preference-avg-aggregate.output';
import { PreferenceSumAggregate } from './preference-sum-aggregate.output';
import { PreferenceMinAggregate } from './preference-min-aggregate.output';
import { PreferenceMaxAggregate } from './preference-max-aggregate.output';

@ObjectType()
export class AggregatePreference {

    @Field(() => PreferenceCountAggregate, {nullable:true})
    _count?: PreferenceCountAggregate;

    @Field(() => PreferenceAvgAggregate, {nullable:true})
    _avg?: PreferenceAvgAggregate;

    @Field(() => PreferenceSumAggregate, {nullable:true})
    _sum?: PreferenceSumAggregate;

    @Field(() => PreferenceMinAggregate, {nullable:true})
    _min?: PreferenceMinAggregate;

    @Field(() => PreferenceMaxAggregate, {nullable:true})
    _max?: PreferenceMaxAggregate;
}
