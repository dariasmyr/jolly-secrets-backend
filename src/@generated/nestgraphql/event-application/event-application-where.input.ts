import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { EnumEventApplicationStatusFilter } from '../prisma/enum-event-application-status-filter.input';
import { AccountRelationFilter } from '../account/account-relation-filter.input';
import { PreferenceListRelationFilter } from '../preference/preference-list-relation-filter.input';
import { EventApplicationPairListRelationFilter } from '../event-application-pair/event-application-pair-list-relation-filter.input';

@InputType()
export class EventApplicationWhereInput {

    @Field(() => [EventApplicationWhereInput], {nullable:true})
    AND?: Array<EventApplicationWhereInput>;

    @Field(() => [EventApplicationWhereInput], {nullable:true})
    OR?: Array<EventApplicationWhereInput>;

    @Field(() => [EventApplicationWhereInput], {nullable:true})
    NOT?: Array<EventApplicationWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => IntFilter, {nullable:true})
    accountId?: IntFilter;

    @Field(() => EnumEventApplicationStatusFilter, {nullable:true})
    status?: EnumEventApplicationStatusFilter;

    @Field(() => AccountRelationFilter, {nullable:true})
    account?: AccountRelationFilter;

    @Field(() => PreferenceListRelationFilter, {nullable:true})
    preferences?: PreferenceListRelationFilter;

    @Field(() => EventApplicationPairListRelationFilter, {nullable:true})
    eventApplicationFirstPairs?: EventApplicationPairListRelationFilter;

    @Field(() => EventApplicationPairListRelationFilter, {nullable:true})
    eventApplicationSecondPairs?: EventApplicationPairListRelationFilter;
}
