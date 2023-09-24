import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { MessageListRelationFilter } from '../message/message-list-relation-filter.input';
import { ChatMemberListRelationFilter } from '../chat-member/chat-member-list-relation-filter.input';
import { EventApplicationPairListRelationFilter } from '../event-application-pair/event-application-pair-list-relation-filter.input';

@InputType()
export class ChatWhereInput {

    @Field(() => [ChatWhereInput], {nullable:true})
    AND?: Array<ChatWhereInput>;

    @Field(() => [ChatWhereInput], {nullable:true})
    OR?: Array<ChatWhereInput>;

    @Field(() => [ChatWhereInput], {nullable:true})
    NOT?: Array<ChatWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => MessageListRelationFilter, {nullable:true})
    messages?: MessageListRelationFilter;

    @Field(() => ChatMemberListRelationFilter, {nullable:true})
    members?: ChatMemberListRelationFilter;

    @Field(() => EventApplicationPairListRelationFilter, {nullable:true})
    eventApplicationPair?: EventApplicationPairListRelationFilter;
}
