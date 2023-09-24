import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Message } from '../message/message.model';
import { ChatMember } from '../chat-member/chat-member.model';
import { EventApplicationPair } from '../event-application-pair/event-application-pair.model';
import { ChatCount } from './chat-count.output';

@ObjectType()
export class Chat {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => [Message], {nullable:true})
    messages?: Array<Message>;

    @Field(() => [ChatMember], {nullable:true})
    members?: Array<ChatMember>;

    @Field(() => [EventApplicationPair], {nullable:true})
    eventApplicationPair?: Array<EventApplicationPair>;

    @Field(() => ChatCount, {nullable:false})
    _count?: ChatCount;
}
