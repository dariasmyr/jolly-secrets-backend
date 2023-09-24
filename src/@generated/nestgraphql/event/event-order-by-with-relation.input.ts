import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { GroupOrderByWithRelationInput } from '../group/group-order-by-with-relation.input';
import { EventApplicationPairOrderByRelationAggregateInput } from '../event-application-pair/event-application-pair-order-by-relation-aggregate.input';

@InputType()
export class EventOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    pictureUrl?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    groupId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    startsAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    endsAt?: keyof typeof SortOrder;

    @Field(() => GroupOrderByWithRelationInput, {nullable:true})
    group?: GroupOrderByWithRelationInput;

    @Field(() => EventApplicationPairOrderByRelationAggregateInput, {nullable:true})
    applicationPairs?: EventApplicationPairOrderByRelationAggregateInput;
}
