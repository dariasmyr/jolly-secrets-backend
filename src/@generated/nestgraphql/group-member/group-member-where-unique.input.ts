import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { GroupMemberGroupIdAccountIdCompoundUniqueInput } from './group-member-group-id-account-id-compound-unique.input';
import { GroupMemberWhereInput } from './group-member-where.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { EnumGroupMemberRoleFilter } from '../prisma/enum-group-member-role-filter.input';
import { GroupRelationFilter } from '../group/group-relation-filter.input';
import { AccountRelationFilter } from '../account/account-relation-filter.input';

@InputType()
export class GroupMemberWhereUniqueInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => GroupMemberGroupIdAccountIdCompoundUniqueInput, {nullable:true})
    groupId_accountId?: GroupMemberGroupIdAccountIdCompoundUniqueInput;

    @Field(() => [GroupMemberWhereInput], {nullable:true})
    AND?: Array<GroupMemberWhereInput>;

    @Field(() => [GroupMemberWhereInput], {nullable:true})
    OR?: Array<GroupMemberWhereInput>;

    @Field(() => [GroupMemberWhereInput], {nullable:true})
    NOT?: Array<GroupMemberWhereInput>;

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
