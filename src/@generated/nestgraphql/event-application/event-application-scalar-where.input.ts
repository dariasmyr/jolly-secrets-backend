import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { EnumEventApplicationStatusFilter } from '../prisma/enum-event-application-status-filter.input';

@InputType()
export class EventApplicationScalarWhereInput {

    @Field(() => [EventApplicationScalarWhereInput], {nullable:true})
    AND?: Array<EventApplicationScalarWhereInput>;

    @Field(() => [EventApplicationScalarWhereInput], {nullable:true})
    OR?: Array<EventApplicationScalarWhereInput>;

    @Field(() => [EventApplicationScalarWhereInput], {nullable:true})
    NOT?: Array<EventApplicationScalarWhereInput>;

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
}
