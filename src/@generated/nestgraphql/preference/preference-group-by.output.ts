import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { PriceRange } from '../prisma/price-range.enum';
import { PreferenceCountAggregate } from './preference-count-aggregate.output';
import { PreferenceAvgAggregate } from './preference-avg-aggregate.output';
import { PreferenceSumAggregate } from './preference-sum-aggregate.output';
import { PreferenceMinAggregate } from './preference-min-aggregate.output';
import { PreferenceMaxAggregate } from './preference-max-aggregate.output';

@ObjectType()
export class PreferenceGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => PriceRange, {nullable:false})
    priceRange!: keyof typeof PriceRange;

    @Field(() => String, {nullable:false})
    likes!: string;

    @Field(() => String, {nullable:false})
    dislikes!: string;

    @Field(() => String, {nullable:false})
    comment!: string;

    @Field(() => Int, {nullable:true})
    applicationId?: number;

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
