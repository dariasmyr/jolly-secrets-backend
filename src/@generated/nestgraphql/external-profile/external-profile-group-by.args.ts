import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ExternalProfileWhereInput } from './external-profile-where.input';
import { Type } from 'class-transformer';
import { ExternalProfileOrderByWithAggregationInput } from './external-profile-order-by-with-aggregation.input';
import { ExternalProfileScalarFieldEnum } from './external-profile-scalar-field.enum';
import { ExternalProfileScalarWhereWithAggregatesInput } from './external-profile-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { ExternalProfileCountAggregateInput } from './external-profile-count-aggregate.input';
import { ExternalProfileAvgAggregateInput } from './external-profile-avg-aggregate.input';
import { ExternalProfileSumAggregateInput } from './external-profile-sum-aggregate.input';
import { ExternalProfileMinAggregateInput } from './external-profile-min-aggregate.input';
import { ExternalProfileMaxAggregateInput } from './external-profile-max-aggregate.input';

@ArgsType()
export class ExternalProfileGroupByArgs {

    @Field(() => ExternalProfileWhereInput, {nullable:true})
    @Type(() => ExternalProfileWhereInput)
    where?: ExternalProfileWhereInput;

    @Field(() => [ExternalProfileOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<ExternalProfileOrderByWithAggregationInput>;

    @Field(() => [ExternalProfileScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof ExternalProfileScalarFieldEnum>;

    @Field(() => ExternalProfileScalarWhereWithAggregatesInput, {nullable:true})
    having?: ExternalProfileScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => ExternalProfileCountAggregateInput, {nullable:true})
    _count?: ExternalProfileCountAggregateInput;

    @Field(() => ExternalProfileAvgAggregateInput, {nullable:true})
    _avg?: ExternalProfileAvgAggregateInput;

    @Field(() => ExternalProfileSumAggregateInput, {nullable:true})
    _sum?: ExternalProfileSumAggregateInput;

    @Field(() => ExternalProfileMinAggregateInput, {nullable:true})
    _min?: ExternalProfileMinAggregateInput;

    @Field(() => ExternalProfileMaxAggregateInput, {nullable:true})
    _max?: ExternalProfileMaxAggregateInput;
}
