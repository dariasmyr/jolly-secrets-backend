import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PreferenceWhereInput } from './preference-where.input';
import { Type } from 'class-transformer';
import { PreferenceOrderByWithAggregationInput } from './preference-order-by-with-aggregation.input';
import { PreferenceScalarFieldEnum } from './preference-scalar-field.enum';
import { PreferenceScalarWhereWithAggregatesInput } from './preference-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { PreferenceCountAggregateInput } from './preference-count-aggregate.input';
import { PreferenceAvgAggregateInput } from './preference-avg-aggregate.input';
import { PreferenceSumAggregateInput } from './preference-sum-aggregate.input';
import { PreferenceMinAggregateInput } from './preference-min-aggregate.input';
import { PreferenceMaxAggregateInput } from './preference-max-aggregate.input';

@ArgsType()
export class PreferenceGroupByArgs {

    @Field(() => PreferenceWhereInput, {nullable:true})
    @Type(() => PreferenceWhereInput)
    where?: PreferenceWhereInput;

    @Field(() => [PreferenceOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<PreferenceOrderByWithAggregationInput>;

    @Field(() => [PreferenceScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof PreferenceScalarFieldEnum>;

    @Field(() => PreferenceScalarWhereWithAggregatesInput, {nullable:true})
    having?: PreferenceScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => PreferenceCountAggregateInput, {nullable:true})
    _count?: PreferenceCountAggregateInput;

    @Field(() => PreferenceAvgAggregateInput, {nullable:true})
    _avg?: PreferenceAvgAggregateInput;

    @Field(() => PreferenceSumAggregateInput, {nullable:true})
    _sum?: PreferenceSumAggregateInput;

    @Field(() => PreferenceMinAggregateInput, {nullable:true})
    _min?: PreferenceMinAggregateInput;

    @Field(() => PreferenceMaxAggregateInput, {nullable:true})
    _max?: PreferenceMaxAggregateInput;
}
