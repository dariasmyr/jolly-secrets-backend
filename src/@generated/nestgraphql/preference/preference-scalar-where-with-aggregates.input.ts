import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { EnumPriceRangeWithAggregatesFilter } from '../prisma/enum-price-range-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { IntNullableWithAggregatesFilter } from '../prisma/int-nullable-with-aggregates-filter.input';

@InputType()
export class PreferenceScalarWhereWithAggregatesInput {

    @Field(() => [PreferenceScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<PreferenceScalarWhereWithAggregatesInput>;

    @Field(() => [PreferenceScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<PreferenceScalarWhereWithAggregatesInput>;

    @Field(() => [PreferenceScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<PreferenceScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;

    @Field(() => EnumPriceRangeWithAggregatesFilter, {nullable:true})
    priceRange?: EnumPriceRangeWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    likes?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    dislikes?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    comment?: StringWithAggregatesFilter;

    @Field(() => IntNullableWithAggregatesFilter, {nullable:true})
    applicationId?: IntNullableWithAggregatesFilter;
}
