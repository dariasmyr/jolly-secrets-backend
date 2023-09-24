import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { EventApplicationCountOrderByAggregateInput } from './event-application-count-order-by-aggregate.input';
import { EventApplicationAvgOrderByAggregateInput } from './event-application-avg-order-by-aggregate.input';
import { EventApplicationMaxOrderByAggregateInput } from './event-application-max-order-by-aggregate.input';
import { EventApplicationMinOrderByAggregateInput } from './event-application-min-order-by-aggregate.input';
import { EventApplicationSumOrderByAggregateInput } from './event-application-sum-order-by-aggregate.input';

@InputType()
export class EventApplicationOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    accountId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;

    @Field(() => EventApplicationCountOrderByAggregateInput, {nullable:true})
    _count?: EventApplicationCountOrderByAggregateInput;

    @Field(() => EventApplicationAvgOrderByAggregateInput, {nullable:true})
    _avg?: EventApplicationAvgOrderByAggregateInput;

    @Field(() => EventApplicationMaxOrderByAggregateInput, {nullable:true})
    _max?: EventApplicationMaxOrderByAggregateInput;

    @Field(() => EventApplicationMinOrderByAggregateInput, {nullable:true})
    _min?: EventApplicationMinOrderByAggregateInput;

    @Field(() => EventApplicationSumOrderByAggregateInput, {nullable:true})
    _sum?: EventApplicationSumOrderByAggregateInput;
}
