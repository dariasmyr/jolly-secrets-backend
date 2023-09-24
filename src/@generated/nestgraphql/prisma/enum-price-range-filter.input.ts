import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PriceRange } from './price-range.enum';
import { NestedEnumPriceRangeFilter } from './nested-enum-price-range-filter.input';

@InputType()
export class EnumPriceRangeFilter {

    @Field(() => PriceRange, {nullable:true})
    equals?: keyof typeof PriceRange;

    @Field(() => [PriceRange], {nullable:true})
    in?: Array<keyof typeof PriceRange>;

    @Field(() => [PriceRange], {nullable:true})
    notIn?: Array<keyof typeof PriceRange>;

    @Field(() => NestedEnumPriceRangeFilter, {nullable:true})
    not?: NestedEnumPriceRangeFilter;
}
