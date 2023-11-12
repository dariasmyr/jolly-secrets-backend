import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { GroupMemberOrderByRelationAggregateInput } from '../group-member/group-member-order-by-relation-aggregate.input';
import { EventOrderByRelationAggregateInput } from '../event/event-order-by-relation-aggregate.input';
import { GroupInviteOrderByRelationAggregateInput } from '../group-invite/group-invite-order-by-relation-aggregate.input';

@InputType()
export class GroupOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    pictureUrl?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    type?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;

    @Field(() => GroupMemberOrderByRelationAggregateInput, {nullable:true})
    members?: GroupMemberOrderByRelationAggregateInput;

    @Field(() => EventOrderByRelationAggregateInput, {nullable:true})
    events?: EventOrderByRelationAggregateInput;

    @Field(() => GroupInviteOrderByRelationAggregateInput, {nullable:true})
    groupInvites?: GroupInviteOrderByRelationAggregateInput;
}
