import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { EnumEventStatusFilter } from '../prisma/enum-event-status-filter.input';

@InputType()
export class EventScalarWhereInput {

    @Field(() => [EventScalarWhereInput], {nullable:true})
    AND?: Array<EventScalarWhereInput>;

    @Field(() => [EventScalarWhereInput], {nullable:true})
    OR?: Array<EventScalarWhereInput>;

    @Field(() => [EventScalarWhereInput], {nullable:true})
    NOT?: Array<EventScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

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
}
