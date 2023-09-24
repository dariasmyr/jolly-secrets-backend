import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GroupType } from './group-type.enum';
import { NestedEnumGroupTypeWithAggregatesFilter } from './nested-enum-group-type-with-aggregates-filter.input';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumGroupTypeFilter } from './nested-enum-group-type-filter.input';

@InputType()
export class EnumGroupTypeWithAggregatesFilter {

    @Field(() => GroupType, {nullable:true})
    equals?: keyof typeof GroupType;

    @Field(() => [GroupType], {nullable:true})
    in?: Array<keyof typeof GroupType>;

    @Field(() => [GroupType], {nullable:true})
    notIn?: Array<keyof typeof GroupType>;

    @Field(() => NestedEnumGroupTypeWithAggregatesFilter, {nullable:true})
    not?: NestedEnumGroupTypeWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumGroupTypeFilter, {nullable:true})
    _min?: NestedEnumGroupTypeFilter;

    @Field(() => NestedEnumGroupTypeFilter, {nullable:true})
    _max?: NestedEnumGroupTypeFilter;
}
