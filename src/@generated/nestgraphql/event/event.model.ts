import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Group } from '../group/group.model';
import { EventApplicationPair } from '../event-application-pair/event-application-pair.model';
import { EventCount } from './event-count.output';

@ObjectType()
export class Event {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => String, {nullable:false})
    pictureUrl!: string;

    @Field(() => Int, {nullable:false})
    groupId!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => Date, {nullable:false})
    startsAt!: Date;

    @Field(() => Date, {nullable:false})
    endsAt!: Date;

    @Field(() => Group, {nullable:false})
    group?: Group;

    @Field(() => [EventApplicationPair], {nullable:true})
    applicationPairs?: Array<EventApplicationPair>;

    @Field(() => EventCount, {nullable:false})
    _count?: EventCount;
}
