import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { ChatMemberCountOrderByAggregateInput } from './chat-member-count-order-by-aggregate.input';
import { ChatMemberAvgOrderByAggregateInput } from './chat-member-avg-order-by-aggregate.input';
import { ChatMemberMaxOrderByAggregateInput } from './chat-member-max-order-by-aggregate.input';
import { ChatMemberMinOrderByAggregateInput } from './chat-member-min-order-by-aggregate.input';
import { ChatMemberSumOrderByAggregateInput } from './chat-member-sum-order-by-aggregate.input';

@InputType()
export class ChatMemberOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    accountId?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    chatId?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    role?: keyof typeof SortOrder;

    @Field(() => ChatMemberCountOrderByAggregateInput, {nullable:true})
    _count?: ChatMemberCountOrderByAggregateInput;

    @Field(() => ChatMemberAvgOrderByAggregateInput, {nullable:true})
    _avg?: ChatMemberAvgOrderByAggregateInput;

    @Field(() => ChatMemberMaxOrderByAggregateInput, {nullable:true})
    _max?: ChatMemberMaxOrderByAggregateInput;

    @Field(() => ChatMemberMinOrderByAggregateInput, {nullable:true})
    _min?: ChatMemberMinOrderByAggregateInput;

    @Field(() => ChatMemberSumOrderByAggregateInput, {nullable:true})
    _sum?: ChatMemberSumOrderByAggregateInput;
}
