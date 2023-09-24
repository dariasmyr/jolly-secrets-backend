import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { AccountCountOrderByAggregateInput } from './account-count-order-by-aggregate.input';
import { AccountAvgOrderByAggregateInput } from './account-avg-order-by-aggregate.input';
import { AccountMaxOrderByAggregateInput } from './account-max-order-by-aggregate.input';
import { AccountMinOrderByAggregateInput } from './account-min-order-by-aggregate.input';
import { AccountSumOrderByAggregateInput } from './account-sum-order-by-aggregate.input';

@InputType()
export class AccountOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    email?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    roles?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    avatarUrl?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    username?: keyof typeof SortOrder;

    @Field(() => AccountCountOrderByAggregateInput, {nullable:true})
    _count?: AccountCountOrderByAggregateInput;

    @Field(() => AccountAvgOrderByAggregateInput, {nullable:true})
    _avg?: AccountAvgOrderByAggregateInput;

    @Field(() => AccountMaxOrderByAggregateInput, {nullable:true})
    _max?: AccountMaxOrderByAggregateInput;

    @Field(() => AccountMinOrderByAggregateInput, {nullable:true})
    _min?: AccountMinOrderByAggregateInput;

    @Field(() => AccountSumOrderByAggregateInput, {nullable:true})
    _sum?: AccountSumOrderByAggregateInput;
}
