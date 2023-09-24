import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { EventApplicationPairCountOrderByAggregateInput } from './event-application-pair-count-order-by-aggregate.input';
import { EventApplicationPairAvgOrderByAggregateInput } from './event-application-pair-avg-order-by-aggregate.input';
import { EventApplicationPairMaxOrderByAggregateInput } from './event-application-pair-max-order-by-aggregate.input';
import { EventApplicationPairMinOrderByAggregateInput } from './event-application-pair-min-order-by-aggregate.input';
import { EventApplicationPairSumOrderByAggregateInput } from './event-application-pair-sum-order-by-aggregate.input';

@InputType()
export class EventApplicationPairOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    eventId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    eventApplicationFirstId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    eventApplicationSecondId?: keyof typeof SortOrder;

    @Field(() => EventApplicationPairCountOrderByAggregateInput, {nullable:true})
    _count?: EventApplicationPairCountOrderByAggregateInput;

    @Field(() => EventApplicationPairAvgOrderByAggregateInput, {nullable:true})
    _avg?: EventApplicationPairAvgOrderByAggregateInput;

    @Field(() => EventApplicationPairMaxOrderByAggregateInput, {nullable:true})
    _max?: EventApplicationPairMaxOrderByAggregateInput;

    @Field(() => EventApplicationPairMinOrderByAggregateInput, {nullable:true})
    _min?: EventApplicationPairMinOrderByAggregateInput;

    @Field(() => EventApplicationPairSumOrderByAggregateInput, {nullable:true})
    _sum?: EventApplicationPairSumOrderByAggregateInput;
}
