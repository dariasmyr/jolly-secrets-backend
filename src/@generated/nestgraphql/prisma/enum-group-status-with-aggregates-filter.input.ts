import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GroupStatus } from './group-status.enum';
import { NestedEnumGroupStatusWithAggregatesFilter } from './nested-enum-group-status-with-aggregates-filter.input';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumGroupStatusFilter } from './nested-enum-group-status-filter.input';

@InputType()
export class EnumGroupStatusWithAggregatesFilter {

    @Field(() => GroupStatus, {nullable:true})
    equals?: keyof typeof GroupStatus;

    @Field(() => [GroupStatus], {nullable:true})
    in?: Array<keyof typeof GroupStatus>;

    @Field(() => [GroupStatus], {nullable:true})
    notIn?: Array<keyof typeof GroupStatus>;

    @Field(() => NestedEnumGroupStatusWithAggregatesFilter, {nullable:true})
    not?: NestedEnumGroupStatusWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumGroupStatusFilter, {nullable:true})
    _min?: NestedEnumGroupStatusFilter;

    @Field(() => NestedEnumGroupStatusFilter, {nullable:true})
    _max?: NestedEnumGroupStatusFilter;
}
