import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { EnumGroupMemberRoleWithAggregatesFilter } from '../prisma/enum-group-member-role-with-aggregates-filter.input';

@InputType()
export class GroupMemberScalarWhereWithAggregatesInput {

    @Field(() => [GroupMemberScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<GroupMemberScalarWhereWithAggregatesInput>;

    @Field(() => [GroupMemberScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<GroupMemberScalarWhereWithAggregatesInput>;

    @Field(() => [GroupMemberScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<GroupMemberScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    groupId?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    accountId?: IntWithAggregatesFilter;

    @Field(() => EnumGroupMemberRoleWithAggregatesFilter, {nullable:true})
    role?: EnumGroupMemberRoleWithAggregatesFilter;
}
