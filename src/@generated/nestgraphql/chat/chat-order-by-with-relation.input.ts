import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { MessageOrderByRelationAggregateInput } from '../message/message-order-by-relation-aggregate.input';
import { ChatMemberOrderByRelationAggregateInput } from '../chat-member/chat-member-order-by-relation-aggregate.input';
import { EventApplicationPairOrderByRelationAggregateInput } from '../event-application-pair/event-application-pair-order-by-relation-aggregate.input';

@InputType()
export class ChatOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => MessageOrderByRelationAggregateInput, {nullable:true})
    messages?: MessageOrderByRelationAggregateInput;

    @Field(() => ChatMemberOrderByRelationAggregateInput, {nullable:true})
    members?: ChatMemberOrderByRelationAggregateInput;

    @Field(() => EventApplicationPairOrderByRelationAggregateInput, {nullable:true})
    eventApplicationPair?: EventApplicationPairOrderByRelationAggregateInput;
}
