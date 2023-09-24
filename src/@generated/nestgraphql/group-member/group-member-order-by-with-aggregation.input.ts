import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { GroupMemberCountOrderByAggregateInput } from './group-member-count-order-by-aggregate.input';
import { GroupMemberAvgOrderByAggregateInput } from './group-member-avg-order-by-aggregate.input';
import { GroupMemberMaxOrderByAggregateInput } from './group-member-max-order-by-aggregate.input';
import { GroupMemberMinOrderByAggregateInput } from './group-member-min-order-by-aggregate.input';
import { GroupMemberSumOrderByAggregateInput } from './group-member-sum-order-by-aggregate.input';

@InputType()
export class GroupMemberOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    groupId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    accountId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    role?: keyof typeof SortOrder;

    @Field(() => GroupMemberCountOrderByAggregateInput, {nullable:true})
    _count?: GroupMemberCountOrderByAggregateInput;

    @Field(() => GroupMemberAvgOrderByAggregateInput, {nullable:true})
    _avg?: GroupMemberAvgOrderByAggregateInput;

    @Field(() => GroupMemberMaxOrderByAggregateInput, {nullable:true})
    _max?: GroupMemberMaxOrderByAggregateInput;

    @Field(() => GroupMemberMinOrderByAggregateInput, {nullable:true})
    _min?: GroupMemberMinOrderByAggregateInput;

    @Field(() => GroupMemberSumOrderByAggregateInput, {nullable:true})
    _sum?: GroupMemberSumOrderByAggregateInput;
}
