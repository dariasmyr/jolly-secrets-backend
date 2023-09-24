import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { AccountRole } from '../prisma/account-role.enum';
import { AccountStatus } from '../prisma/account-status.enum';
import { AccountSessionUncheckedUpdateManyWithoutAccountNestedInput } from '../account-session/account-session-unchecked-update-many-without-account-nested.input';
import { ExternalProfileUncheckedUpdateManyWithoutAccountNestedInput } from '../external-profile/external-profile-unchecked-update-many-without-account-nested.input';
import { GroupMemberUncheckedUpdateManyWithoutAccountNestedInput } from '../group-member/group-member-unchecked-update-many-without-account-nested.input';
import { EventApplicationUncheckedUpdateManyWithoutAccountNestedInput } from '../event-application/event-application-unchecked-update-many-without-account-nested.input';
import { NotificationUncheckedUpdateManyWithoutAccountNestedInput } from '../notification/notification-unchecked-update-many-without-account-nested.input';
import { ChatMemberUncheckedUpdateManyWithoutAccountNestedInput } from '../chat-member/chat-member-unchecked-update-many-without-account-nested.input';
import { MessageUncheckedUpdateManyWithoutAccountNestedInput } from '../message/message-unchecked-update-many-without-account-nested.input';

@InputType()
export class AccountUncheckedUpdateInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => String, {nullable:true})
    email?: string;

    @Field(() => [AccountRole], {nullable:true})
    roles?: Array<keyof typeof AccountRole>;

    @Field(() => AccountStatus, {nullable:true})
    status?: keyof typeof AccountStatus;

    @Field(() => String, {nullable:true})
    avatarUrl?: string;

    @Field(() => String, {nullable:true})
    username?: string;

    @Field(() => AccountSessionUncheckedUpdateManyWithoutAccountNestedInput, {nullable:true})
    sessions?: AccountSessionUncheckedUpdateManyWithoutAccountNestedInput;

    @Field(() => ExternalProfileUncheckedUpdateManyWithoutAccountNestedInput, {nullable:true})
    externalProfiles?: ExternalProfileUncheckedUpdateManyWithoutAccountNestedInput;

    @Field(() => GroupMemberUncheckedUpdateManyWithoutAccountNestedInput, {nullable:true})
    groupMembers?: GroupMemberUncheckedUpdateManyWithoutAccountNestedInput;

    @Field(() => EventApplicationUncheckedUpdateManyWithoutAccountNestedInput, {nullable:true})
    eventApplications?: EventApplicationUncheckedUpdateManyWithoutAccountNestedInput;

    @Field(() => NotificationUncheckedUpdateManyWithoutAccountNestedInput, {nullable:true})
    notifications?: NotificationUncheckedUpdateManyWithoutAccountNestedInput;

    @Field(() => ChatMemberUncheckedUpdateManyWithoutAccountNestedInput, {nullable:true})
    chatMembers?: ChatMemberUncheckedUpdateManyWithoutAccountNestedInput;

    @Field(() => MessageUncheckedUpdateManyWithoutAccountNestedInput, {nullable:true})
    messages?: MessageUncheckedUpdateManyWithoutAccountNestedInput;
}
