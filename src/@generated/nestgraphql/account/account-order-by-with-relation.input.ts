import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { AccountSessionOrderByRelationAggregateInput } from '../account-session/account-session-order-by-relation-aggregate.input';
import { ExternalProfileOrderByRelationAggregateInput } from '../external-profile/external-profile-order-by-relation-aggregate.input';
import { GroupMemberOrderByRelationAggregateInput } from '../group-member/group-member-order-by-relation-aggregate.input';
import { EventApplicationOrderByRelationAggregateInput } from '../event-application/event-application-order-by-relation-aggregate.input';
import { NotificationOrderByRelationAggregateInput } from '../notification/notification-order-by-relation-aggregate.input';
import { ChatMemberOrderByRelationAggregateInput } from '../chat-member/chat-member-order-by-relation-aggregate.input';
import { MessageOrderByRelationAggregateInput } from '../message/message-order-by-relation-aggregate.input';

@InputType()
export class AccountOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    email?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    isNotificationsEnabled?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    roles?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    avatarUrl?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    username?: keyof typeof SortOrder;

    @Field(() => AccountSessionOrderByRelationAggregateInput, {nullable:true})
    sessions?: AccountSessionOrderByRelationAggregateInput;

    @Field(() => ExternalProfileOrderByRelationAggregateInput, {nullable:true})
    externalProfiles?: ExternalProfileOrderByRelationAggregateInput;

    @Field(() => GroupMemberOrderByRelationAggregateInput, {nullable:true})
    groupMembers?: GroupMemberOrderByRelationAggregateInput;

    @Field(() => EventApplicationOrderByRelationAggregateInput, {nullable:true})
    eventApplications?: EventApplicationOrderByRelationAggregateInput;

    @Field(() => NotificationOrderByRelationAggregateInput, {nullable:true})
    notifications?: NotificationOrderByRelationAggregateInput;

    @Field(() => ChatMemberOrderByRelationAggregateInput, {nullable:true})
    chatMembers?: ChatMemberOrderByRelationAggregateInput;

    @Field(() => MessageOrderByRelationAggregateInput, {nullable:true})
    messages?: MessageOrderByRelationAggregateInput;
}
