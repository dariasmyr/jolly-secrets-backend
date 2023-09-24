import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { AccountOrderByWithRelationInput } from '../account/account-order-by-with-relation.input';
import { PreferenceOrderByRelationAggregateInput } from '../preference/preference-order-by-relation-aggregate.input';
import { EventApplicationPairOrderByRelationAggregateInput } from '../event-application-pair/event-application-pair-order-by-relation-aggregate.input';

@InputType()
export class EventApplicationOrderByWithRelationInput {

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

    @Field(() => AccountOrderByWithRelationInput, {nullable:true})
    account?: AccountOrderByWithRelationInput;

    @Field(() => PreferenceOrderByRelationAggregateInput, {nullable:true})
    preferences?: PreferenceOrderByRelationAggregateInput;

    @Field(() => EventApplicationPairOrderByRelationAggregateInput, {nullable:true})
    eventApplicationFirstPairs?: EventApplicationPairOrderByRelationAggregateInput;

    @Field(() => EventApplicationPairOrderByRelationAggregateInput, {nullable:true})
    eventApplicationSecondPairs?: EventApplicationPairOrderByRelationAggregateInput;
}
