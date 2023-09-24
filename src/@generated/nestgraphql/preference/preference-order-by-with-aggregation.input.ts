import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { PreferenceCountOrderByAggregateInput } from './preference-count-order-by-aggregate.input';
import { PreferenceAvgOrderByAggregateInput } from './preference-avg-order-by-aggregate.input';
import { PreferenceMaxOrderByAggregateInput } from './preference-max-order-by-aggregate.input';
import { PreferenceMinOrderByAggregateInput } from './preference-min-order-by-aggregate.input';
import { PreferenceSumOrderByAggregateInput } from './preference-sum-order-by-aggregate.input';

@InputType()
export class PreferenceOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    priceRange?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    likes?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    dislikes?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    comment?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    applicationId?: SortOrderInput;

    @Field(() => PreferenceCountOrderByAggregateInput, {nullable:true})
    _count?: PreferenceCountOrderByAggregateInput;

    @Field(() => PreferenceAvgOrderByAggregateInput, {nullable:true})
    _avg?: PreferenceAvgOrderByAggregateInput;

    @Field(() => PreferenceMaxOrderByAggregateInput, {nullable:true})
    _max?: PreferenceMaxOrderByAggregateInput;

    @Field(() => PreferenceMinOrderByAggregateInput, {nullable:true})
    _min?: PreferenceMinOrderByAggregateInput;

    @Field(() => PreferenceSumOrderByAggregateInput, {nullable:true})
    _sum?: PreferenceSumOrderByAggregateInput;
}
