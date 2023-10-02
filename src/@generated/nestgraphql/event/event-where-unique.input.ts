import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { EventGroupIdNameCompoundUniqueInput } from './event-group-id-name-compound-unique.input';
import { EventWhereInput } from './event-where.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { EnumEventStatusFilter } from '../prisma/enum-event-status-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { GroupRelationFilter } from '../group/group-relation-filter.input';
import { EventApplicationPairListRelationFilter } from '../event-application-pair/event-application-pair-list-relation-filter.input';

@InputType()
export class EventWhereUniqueInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => EventGroupIdNameCompoundUniqueInput, {nullable:true})
    groupId_name?: EventGroupIdNameCompoundUniqueInput;

    @Field(() => [EventWhereInput], {nullable:true})
    AND?: Array<EventWhereInput>;

    @Field(() => [EventWhereInput], {nullable:true})
    OR?: Array<EventWhereInput>;

    @Field(() => [EventWhereInput], {nullable:true})
    NOT?: Array<EventWhereInput>;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => StringFilter, {nullable:true})
    pictureUrl?: StringFilter;

    @Field(() => EnumEventStatusFilter, {nullable:true})
    status?: EnumEventStatusFilter;

    @Field(() => IntFilter, {nullable:true})
    groupId?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    description?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    startsAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    endsAt?: DateTimeFilter;

    @Field(() => GroupRelationFilter, {nullable:true})
    group?: GroupRelationFilter;

    @Field(() => EventApplicationPairListRelationFilter, {nullable:true})
    applicationPairs?: EventApplicationPairListRelationFilter;
}
