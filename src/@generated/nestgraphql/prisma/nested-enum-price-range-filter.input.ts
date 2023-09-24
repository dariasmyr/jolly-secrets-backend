import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PriceRange } from './price-range.enum';

@InputType()
export class NestedEnumPriceRangeFilter {

    @Field(() => PriceRange, {nullable:true})
    equals?: keyof typeof PriceRange;

    @Field(() => [PriceRange], {nullable:true})
    in?: Array<keyof typeof PriceRange>;

    @Field(() => [PriceRange], {nullable:true})
    notIn?: Array<keyof typeof PriceRange>;

    @Field(() => NestedEnumPriceRangeFilter, {nullable:true})
    not?: NestedEnumPriceRangeFilter;
}
