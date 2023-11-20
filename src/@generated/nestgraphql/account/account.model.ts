import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { AccountRole } from '../prisma/account-role.enum';
import { AccountStatus } from '../prisma/account-status.enum';
import { AccountSession } from '../account-session/account-session.model';
import { ExternalProfile } from '../external-profile/external-profile.model';
import { GroupMember } from '../group-member/group-member.model';
import { EventApplication } from '../event-application/event-application.model';
import { Notification } from '../notification/notification.model';
import { ChatMember } from '../chat-member/chat-member.model';
import { Message } from '../message/message.model';
import { AccountCount } from './account-count.output';

@ObjectType()
export class Account {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => String, {nullable:true})
    email!: string | null;

    @Field(() => Boolean, {nullable:false,defaultValue:true})
    isNotificationsEnabled!: boolean;

    @Field(() => [AccountRole], {nullable:true})
    roles!: Array<keyof typeof AccountRole>;

    @Field(() => AccountStatus, {nullable:false})
    status!: keyof typeof AccountStatus;

    @Field(() => String, {nullable:true})
    avatarUrl!: string | null;

    @Field(() => String, {nullable:false})
    username!: string;

    @Field(() => [AccountSession], {nullable:true})
    sessions?: Array<AccountSession>;

    @Field(() => [ExternalProfile], {nullable:true})
    externalProfiles?: Array<ExternalProfile>;

    @Field(() => [GroupMember], {nullable:true})
    groupMembers?: Array<GroupMember>;

    @Field(() => [EventApplication], {nullable:true})
    eventApplications?: Array<EventApplication>;

    @Field(() => [Notification], {nullable:true})
    notifications?: Array<Notification>;

    @Field(() => [ChatMember], {nullable:true})
    chatMembers?: Array<ChatMember>;

    @Field(() => [Message], {nullable:true})
    messages?: Array<Message>;

    @Field(() => AccountCount, {nullable:false})
    _count?: AccountCount;
}
