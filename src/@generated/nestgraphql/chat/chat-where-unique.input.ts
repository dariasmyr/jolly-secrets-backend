import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ChatWhereInput } from './chat-where.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { MessageListRelationFilter } from '../message/message-list-relation-filter.input';
import { ChatMemberListRelationFilter } from '../chat-member/chat-member-list-relation-filter.input';
import { EventApplicationPairListRelationFilter } from '../event-application-pair/event-application-pair-list-relation-filter.input';

@InputType()
export class ChatWhereUniqueInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => [ChatWhereInput], {nullable:true})
    AND?: Array<ChatWhereInput>;

    @Field(() => [ChatWhereInput], {nullable:true})
    OR?: Array<ChatWhereInput>;

    @Field(() => [ChatWhereInput], {nullable:true})
    NOT?: Array<ChatWhereInput>;

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
