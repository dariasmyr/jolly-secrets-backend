import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AccountRole } from '../prisma/account-role.enum';
import { AccountStatus } from '../prisma/account-status.enum';
import { ExternalProfileUpdateManyWithoutAccountNestedInput } from '../external-profile/external-profile-update-many-without-account-nested.input';
import { GroupMemberUpdateManyWithoutAccountNestedInput } from '../group-member/group-member-update-many-without-account-nested.input';
import { EventApplicationUpdateManyWithoutAccountNestedInput } from '../event-application/event-application-update-many-without-account-nested.input';
import { NotificationUpdateManyWithoutAccountNestedInput } from '../notification/notification-update-many-without-account-nested.input';
import { ChatMemberUpdateManyWithoutAccountNestedInput } from '../chat-member/chat-member-update-many-without-account-nested.input';
import { MessageUpdateManyWithoutAccountNestedInput } from '../message/message-update-many-without-account-nested.input';

@InputType()
export class AccountUpdateWithoutSessionsInput {

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => String, {nullable:true})
    email?: string;

    @Field(() => Boolean, {nullable:true})
    isNotificationsEnabled?: boolean;

    @Field(() => [AccountRole], {nullable:true})
    roles?: Array<keyof typeof AccountRole>;

    @Field(() => AccountStatus, {nullable:true})
    status?: keyof typeof AccountStatus;

    @Field(() => String, {nullable:true})
    avatarUrl?: string;

    @Field(() => String, {nullable:true})
    username?: string;

    @Field(() => ExternalProfileUpdateManyWithoutAccountNestedInput, {nullable:true})
    externalProfiles?: ExternalProfileUpdateManyWithoutAccountNestedInput;

    @Field(() => GroupMemberUpdateManyWithoutAccountNestedInput, {nullable:true})
    groupMembers?: GroupMemberUpdateManyWithoutAccountNestedInput;

    @Field(() => EventApplicationUpdateManyWithoutAccountNestedInput, {nullable:true})
    eventApplications?: EventApplicationUpdateManyWithoutAccountNestedInput;

    @Field(() => NotificationUpdateManyWithoutAccountNestedInput, {nullable:true})
    notifications?: NotificationUpdateManyWithoutAccountNestedInput;

    @Field(() => ChatMemberUpdateManyWithoutAccountNestedInput, {nullable:true})
    chatMembers?: ChatMemberUpdateManyWithoutAccountNestedInput;

    @Field(() => MessageUpdateManyWithoutAccountNestedInput, {nullable:true})
    messages?: MessageUpdateManyWithoutAccountNestedInput;
}
