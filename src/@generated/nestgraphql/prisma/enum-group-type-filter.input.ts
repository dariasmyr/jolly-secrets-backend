import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GroupType } from './group-type.enum';
import { NestedEnumGroupTypeFilter } from './nested-enum-group-type-filter.input';

@InputType()
export class EnumGroupTypeFilter {

    @Field(() => GroupType, {nullable:true})
    equals?: keyof typeof GroupType;

    @Field(() => [GroupType], {nullable:true})
    in?: Array<keyof typeof GroupType>;

    @Field(() => [GroupType], {nullable:true})
    notIn?: Array<keyof typeof GroupType>;

    @Field(() => NestedEnumGroupTypeFilter, {nullable:true})
    not?: NestedEnumGroupTypeFilter;
}
