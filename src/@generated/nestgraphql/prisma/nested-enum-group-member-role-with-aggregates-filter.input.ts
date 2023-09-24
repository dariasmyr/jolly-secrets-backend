import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GroupMemberRole } from './group-member-role.enum';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumGroupMemberRoleFilter } from './nested-enum-group-member-role-filter.input';

@InputType()
export class NestedEnumGroupMemberRoleWithAggregatesFilter {

    @Field(() => GroupMemberRole, {nullable:true})
    equals?: keyof typeof GroupMemberRole;

    @Field(() => [GroupMemberRole], {nullable:true})
    in?: Array<keyof typeof GroupMemberRole>;

    @Field(() => [GroupMemberRole], {nullable:true})
    notIn?: Array<keyof typeof GroupMemberRole>;

    @Field(() => NestedEnumGroupMemberRoleWithAggregatesFilter, {nullable:true})
    not?: NestedEnumGroupMemberRoleWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumGroupMemberRoleFilter, {nullable:true})
    _min?: NestedEnumGroupMemberRoleFilter;

    @Field(() => NestedEnumGroupMemberRoleFilter, {nullable:true})
    _max?: NestedEnumGroupMemberRoleFilter;
}
