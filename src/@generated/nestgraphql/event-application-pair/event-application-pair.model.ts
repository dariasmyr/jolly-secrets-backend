import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Event } from '../event/event.model';
import { EventApplication } from '../event-application/event-application.model';
import { Chat } from '../chat/chat.model';

@ObjectType()
export class EventApplicationPair {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => Int, {nullable:false})
    eventId!: number;

    @Field(() => Int, {nullable:false})
    eventApplicationFirstId!: number;

    @Field(() => Int, {nullable:true})
    eventApplicationSecondId!: number | null;

    @Field(() => Int, {nullable:true})
    chatId!: number | null;

    @Field(() => Event, {nullable:false})
    event?: Event;

    @Field(() => EventApplication, {nullable:false})
    applicationFirst?: EventApplication;

    @Field(() => EventApplication, {nullable:true})
    applicationSecond?: EventApplication | null;

    @Field(() => Chat, {nullable:true})
    chat?: Chat | null;
}
