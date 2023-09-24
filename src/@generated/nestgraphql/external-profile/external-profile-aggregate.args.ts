import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ExternalProfileWhereInput } from './external-profile-where.input';
import { Type } from 'class-transformer';
import { ExternalProfileOrderByWithRelationInput } from './external-profile-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { ExternalProfileWhereUniqueInput } from './external-profile-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ExternalProfileCountAggregateInput } from './external-profile-count-aggregate.input';
import { ExternalProfileAvgAggregateInput } from './external-profile-avg-aggregate.input';
import { ExternalProfileSumAggregateInput } from './external-profile-sum-aggregate.input';
import { ExternalProfileMinAggregateInput } from './external-profile-min-aggregate.input';
import { ExternalProfileMaxAggregateInput } from './external-profile-max-aggregate.input';

@ArgsType()
export class ExternalProfileAggregateArgs {

    @Field(() => ExternalProfileWhereInput, {nullable:true})
    @Type(() => ExternalProfileWhereInput)
    where?: ExternalProfileWhereInput;

    @Field(() => [ExternalProfileOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ExternalProfileOrderByWithRelationInput>;

    @Field(() => ExternalProfileWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<ExternalProfileWhereUniqueInput, 'id' | 'provider_externalId'>;

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
