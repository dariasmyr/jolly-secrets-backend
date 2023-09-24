import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ExternalProfileCountOrderByAggregateInput } from './external-profile-count-order-by-aggregate.input';
import { ExternalProfileAvgOrderByAggregateInput } from './external-profile-avg-order-by-aggregate.input';
import { ExternalProfileMaxOrderByAggregateInput } from './external-profile-max-order-by-aggregate.input';
import { ExternalProfileMinOrderByAggregateInput } from './external-profile-min-order-by-aggregate.input';
import { ExternalProfileSumOrderByAggregateInput } from './external-profile-sum-order-by-aggregate.input';

@InputType()
export class ExternalProfileOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    provider?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    externalId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    accountId?: keyof typeof SortOrder;

    @Field(() => ExternalProfileCountOrderByAggregateInput, {nullable:true})
    _count?: ExternalProfileCountOrderByAggregateInput;

    @Field(() => ExternalProfileAvgOrderByAggregateInput, {nullable:true})
    _avg?: ExternalProfileAvgOrderByAggregateInput;

    @Field(() => ExternalProfileMaxOrderByAggregateInput, {nullable:true})
    _max?: ExternalProfileMaxOrderByAggregateInput;

    @Field(() => ExternalProfileMinOrderByAggregateInput, {nullable:true})
    _min?: ExternalProfileMinOrderByAggregateInput;

    @Field(() => ExternalProfileSumOrderByAggregateInput, {nullable:true})
    _sum?: ExternalProfileSumOrderByAggregateInput;
}
