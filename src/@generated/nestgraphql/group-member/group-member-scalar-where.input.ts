import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { EnumGroupMemberRoleFilter } from '../prisma/enum-group-member-role-filter.input';

@InputType()
export class GroupMemberScalarWhereInput {

    @Field(() => [GroupMemberScalarWhereInput], {nullable:true})
    AND?: Array<GroupMemberScalarWhereInput>;

    @Field(() => [GroupMemberScalarWhereInput], {nullable:true})
    OR?: Array<GroupMemberScalarWhereInput>;

    @Field(() => [GroupMemberScalarWhereInput], {nullable:true})
    NOT?: Array<GroupMemberScalarWhereInput>;

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
}
