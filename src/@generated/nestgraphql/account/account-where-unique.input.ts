import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { AccountWhereInput } from './account-where.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { EnumAccountRoleNullableListFilter } from '../prisma/enum-account-role-nullable-list-filter.input';
import { EnumAccountStatusFilter } from '../prisma/enum-account-status-filter.input';
import { AccountSessionListRelationFilter } from '../account-session/account-session-list-relation-filter.input';
import { ExternalProfileListRelationFilter } from '../external-profile/external-profile-list-relation-filter.input';
import { GroupMemberListRelationFilter } from '../group-member/group-member-list-relation-filter.input';
import { EventApplicationListRelationFilter } from '../event-application/event-application-list-relation-filter.input';
import { NotificationListRelationFilter } from '../notification/notification-list-relation-filter.input';

@InputType()
export class AccountWhereUniqueInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    username?: string;

    @Field(() => [AccountWhereInput], {nullable:true})
    AND?: Array<AccountWhereInput>;

    @Field(() => [AccountWhereInput], {nullable:true})
    OR?: Array<AccountWhereInput>;

    @Field(() => [AccountWhereInput], {nullable:true})
    NOT?: Array<AccountWhereInput>;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    email?: StringNullableFilter;

    @Field(() => EnumAccountRoleNullableListFilter, {nullable:true})
    roles?: EnumAccountRoleNullableListFilter;

    @Field(() => EnumAccountStatusFilter, {nullable:true})
    status?: EnumAccountStatusFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    avatarUrl?: StringNullableFilter;

    @Field(() => AccountSessionListRelationFilter, {nullable:true})
    sessions?: AccountSessionListRelationFilter;

    @Field(() => ExternalProfileListRelationFilter, {nullable:true})
    externalProfiles?: ExternalProfileListRelationFilter;

    @Field(() => GroupMemberListRelationFilter, {nullable:true})
    groupMembers?: GroupMemberListRelationFilter;

    @Field(() => EventApplicationListRelationFilter, {nullable:true})
    eventApplications?: EventApplicationListRelationFilter;

    @Field(() => NotificationListRelationFilter, {nullable:true})
    notifications?: NotificationListRelationFilter;
}
