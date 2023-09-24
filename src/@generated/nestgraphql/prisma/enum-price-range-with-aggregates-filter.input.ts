import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PriceRange } from './price-range.enum';
import { NestedEnumPriceRangeWithAggregatesFilter } from './nested-enum-price-range-with-aggregates-filter.input';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumPriceRangeFilter } from './nested-enum-price-range-filter.input';

@InputType()
export class EnumPriceRangeWithAggregatesFilter {

    @Field(() => PriceRange, {nullable:true})
    equals?: keyof typeof PriceRange;

    @Field(() => [PriceRange], {nullable:true})
    in?: Array<keyof typeof PriceRange>;

    @Field(() => [PriceRange], {nullable:true})
    notIn?: Array<keyof typeof PriceRange>;

    @Field(() => NestedEnumPriceRangeWithAggregatesFilter, {nullable:true})
    not?: NestedEnumPriceRangeWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumPriceRangeFilter, {nullable:true})
    _min?: NestedEnumPriceRangeFilter;

    @Field(() => NestedEnumPriceRangeFilter, {nullable:true})
    _max?: NestedEnumPriceRangeFilter;
}
