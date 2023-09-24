import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { EnumGroupMemberRoleFilter } from '../prisma/enum-group-member-role-filter.input';
import { GroupRelationFilter } from '../group/group-relation-filter.input';
import { AccountRelationFilter } from '../account/account-relation-filter.input';

@InputType()
export class GroupMemberWhereInput {

    @Field(() => [GroupMemberWhereInput], {nullable:true})
    AND?: Array<GroupMemberWhereInput>;

    @Field(() => [GroupMemberWhereInput], {nullable:true})
    OR?: Array<GroupMemberWhereInput>;

    @Field(() => [GroupMemberWhereInput], {nullable:true})
    NOT?: Array<GroupMemberWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => IntFilter, {nullable:true})
    groupId?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    accountId?: IntFilter;

    @Field(() => EnumGroupMemberRoleFilter, {nullable:true})
    role?: EnumGroupMemberRoleFilter;

    @Field(() => GroupRelationFilter, {nullable:true})
    group?: GroupRelationFilter;

    @Field(() => AccountRelationFilter, {nullable:true})
    account?: AccountRelationFilter;
}
