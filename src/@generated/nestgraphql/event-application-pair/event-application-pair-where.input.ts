import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { EventRelationFilter } from '../event/event-relation-filter.input';
import { EventApplicationRelationFilter } from '../event-application/event-application-relation-filter.input';

@InputType()
export class EventApplicationPairWhereInput {

    @Field(() => [EventApplicationPairWhereInput], {nullable:true})
    AND?: Array<EventApplicationPairWhereInput>;

    @Field(() => [EventApplicationPairWhereInput], {nullable:true})
    OR?: Array<EventApplicationPairWhereInput>;

    @Field(() => [EventApplicationPairWhereInput], {nullable:true})
    NOT?: Array<EventApplicationPairWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => IntFilter, {nullable:true})
    eventId?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    eventApplicationFirstId?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    eventApplicationSecondId?: IntFilter;

    @Field(() => EventRelationFilter, {nullable:true})
    event?: EventRelationFilter;

    @Field(() => EventApplicationRelationFilter, {nullable:true})
    applicationFirst?: EventApplicationRelationFilter;

    @Field(() => EventApplicationRelationFilter, {nullable:true})
    applicationSecond?: EventApplicationRelationFilter;
}
