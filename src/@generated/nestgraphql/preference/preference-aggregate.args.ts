import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PreferenceWhereInput } from './preference-where.input';
import { Type } from 'class-transformer';
import { PreferenceOrderByWithRelationInput } from './preference-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { PreferenceWhereUniqueInput } from './preference-where-unique.input';
import { Int } from '@nestjs/graphql';
import { PreferenceCountAggregateInput } from './preference-count-aggregate.input';
import { PreferenceAvgAggregateInput } from './preference-avg-aggregate.input';
import { PreferenceSumAggregateInput } from './preference-sum-aggregate.input';
import { PreferenceMinAggregateInput } from './preference-min-aggregate.input';
import { PreferenceMaxAggregateInput } from './preference-max-aggregate.input';

@ArgsType()
export class PreferenceAggregateArgs {

    @Field(() => PreferenceWhereInput, {nullable:true})
    @Type(() => PreferenceWhereInput)
    where?: PreferenceWhereInput;

    @Field(() => [PreferenceOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<PreferenceOrderByWithRelationInput>;

    @Field(() => PreferenceWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<PreferenceWhereUniqueInput, 'id'>;

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
