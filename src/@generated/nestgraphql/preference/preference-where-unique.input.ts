import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { PreferenceWhereInput } from './preference-where.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { EnumPriceRangeFilter } from '../prisma/enum-price-range-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { EventApplicationNullableRelationFilter } from '../event-application/event-application-nullable-relation-filter.input';

@InputType()
export class PreferenceWhereUniqueInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => [PreferenceWhereInput], {nullable:true})
    AND?: Array<PreferenceWhereInput>;

    @Field(() => [PreferenceWhereInput], {nullable:true})
    OR?: Array<PreferenceWhereInput>;

    @Field(() => [PreferenceWhereInput], {nullable:true})
    NOT?: Array<PreferenceWhereInput>;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => EnumPriceRangeFilter, {nullable:true})
    priceRange?: EnumPriceRangeFilter;

    @Field(() => StringFilter, {nullable:true})
    likes?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    dislikes?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    comment?: StringFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    applicationId?: IntNullableFilter;

    @Field(() => EventApplicationNullableRelationFilter, {nullable:true})
    application?: EventApplicationNullableRelationFilter;
}
