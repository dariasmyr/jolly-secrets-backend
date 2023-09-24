import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { EventApplicationStatus } from '../prisma/event-application-status.enum';
import { Account } from '../account/account.model';
import { Preference } from '../preference/preference.model';
import { EventApplicationPair } from '../event-application-pair/event-application-pair.model';
import { EventApplicationCount } from './event-application-count.output';

@ObjectType()
export class EventApplication {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => Int, {nullable:false})
    accountId!: number;

    @Field(() => EventApplicationStatus, {nullable:false})
    status!: keyof typeof EventApplicationStatus;

    @Field(() => Account, {nullable:false})
    account?: Account;

    @Field(() => [Preference], {nullable:true})
    preferences?: Array<Preference>;

    @Field(() => [EventApplicationPair], {nullable:true})
    eventApplicationFirstPairs?: Array<EventApplicationPair>;

    @Field(() => [EventApplicationPair], {nullable:true})
    eventApplicationSecondPairs?: Array<EventApplicationPair>;

    @Field(() => EventApplicationCount, {nullable:false})
    _count?: EventApplicationCount;
}
