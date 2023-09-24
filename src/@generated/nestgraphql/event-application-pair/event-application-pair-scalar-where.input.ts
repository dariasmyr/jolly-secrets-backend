import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class EventApplicationPairScalarWhereInput {

    @Field(() => [EventApplicationPairScalarWhereInput], {nullable:true})
    AND?: Array<EventApplicationPairScalarWhereInput>;

    @Field(() => [EventApplicationPairScalarWhereInput], {nullable:true})
    OR?: Array<EventApplicationPairScalarWhereInput>;

    @Field(() => [EventApplicationPairScalarWhereInput], {nullable:true})
    NOT?: Array<EventApplicationPairScalarWhereInput>;

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
}
