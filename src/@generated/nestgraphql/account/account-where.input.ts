import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { EnumAccountRoleNullableListFilter } from '../prisma/enum-account-role-nullable-list-filter.input';
import { EnumAccountStatusFilter } from '../prisma/enum-account-status-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { AccountSessionListRelationFilter } from '../account-session/account-session-list-relation-filter.input';
import { ExternalProfileListRelationFilter } from '../external-profile/external-profile-list-relation-filter.input';
import { GroupMemberListRelationFilter } from '../group-member/group-member-list-relation-filter.input';
import { EventApplicationListRelationFilter } from '../event-application/event-application-list-relation-filter.input';
import { NotificationListRelationFilter } from '../notification/notification-list-relation-filter.input';
import { ChatMemberListRelationFilter } from '../chat-member/chat-member-list-relation-filter.input';
import { MessageListRelationFilter } from '../message/message-list-relation-filter.input';

@InputType()
export class AccountWhereInput {

    @Field(() => [AccountWhereInput], {nullable:true})
    AND?: Array<AccountWhereInput>;

    @Field(() => [AccountWhereInput], {nullable:true})
    OR?: Array<AccountWhereInput>;

    @Field(() => [AccountWhereInput], {nullable:true})
    NOT?: Array<AccountWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    email?: StringNullableFilter;

    @Field(() => BoolFilter, {nullable:true})
    isNotificationsEnabled?: BoolFilter;

    @Field(() => EnumAccountRoleNullableListFilter, {nullable:true})
    roles?: EnumAccountRoleNullableListFilter;

    @Field(() => EnumAccountStatusFilter, {nullable:true})
    status?: EnumAccountStatusFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    avatarUrl?: StringNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    username?: StringFilter;

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

    @Field(() => ChatMemberListRelationFilter, {nullable:true})
    chatMembers?: ChatMemberListRelationFilter;

    @Field(() => MessageListRelationFilter, {nullable:true})
    messages?: MessageListRelationFilter;
}
