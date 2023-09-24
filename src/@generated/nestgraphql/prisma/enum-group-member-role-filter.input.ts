import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GroupMemberRole } from './group-member-role.enum';
import { NestedEnumGroupMemberRoleFilter } from './nested-enum-group-member-role-filter.input';

@InputType()
export class EnumGroupMemberRoleFilter {

    @Field(() => GroupMemberRole, {nullable:true})
    equals?: keyof typeof GroupMemberRole;

    @Field(() => [GroupMemberRole], {nullable:true})
    in?: Array<keyof typeof GroupMemberRole>;

    @Field(() => [GroupMemberRole], {nullable:true})
    notIn?: Array<keyof typeof GroupMemberRole>;

    @Field(() => NestedEnumGroupMemberRoleFilter, {nullable:true})
    not?: NestedEnumGroupMemberRoleFilter;
}
