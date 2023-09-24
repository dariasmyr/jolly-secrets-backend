import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { GroupInviteCountOrderByAggregateInput } from './group-invite-count-order-by-aggregate.input';
import { GroupInviteAvgOrderByAggregateInput } from './group-invite-avg-order-by-aggregate.input';
import { GroupInviteMaxOrderByAggregateInput } from './group-invite-max-order-by-aggregate.input';
import { GroupInviteMinOrderByAggregateInput } from './group-invite-min-order-by-aggregate.input';
import { GroupInviteSumOrderByAggregateInput } from './group-invite-sum-order-by-aggregate.input';

@InputType()
export class GroupInviteOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    groupId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    code?: keyof typeof SortOrder;

    @Field(() => GroupInviteCountOrderByAggregateInput, {nullable:true})
    _count?: GroupInviteCountOrderByAggregateInput;

    @Field(() => GroupInviteAvgOrderByAggregateInput, {nullable:true})
    _avg?: GroupInviteAvgOrderByAggregateInput;

    @Field(() => GroupInviteMaxOrderByAggregateInput, {nullable:true})
    _max?: GroupInviteMaxOrderByAggregateInput;

    @Field(() => GroupInviteMinOrderByAggregateInput, {nullable:true})
    _min?: GroupInviteMinOrderByAggregateInput;

    @Field(() => GroupInviteSumOrderByAggregateInput, {nullable:true})
    _sum?: GroupInviteSumOrderByAggregateInput;
}
