import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AccountRole } from '../prisma/account-role.enum';
import { AccountStatus } from '../prisma/account-status.enum';
import { AccountSessionUpdateManyWithoutAccountNestedInput } from '../account-session/account-session-update-many-without-account-nested.input';
import { ExternalProfileUpdateManyWithoutAccountNestedInput } from '../external-profile/external-profile-update-many-without-account-nested.input';
import { EventApplicationUpdateManyWithoutAccountNestedInput } from '../event-application/event-application-update-many-without-account-nested.input';
import { NotificationUpdateManyWithoutAccountNestedInput } from '../notification/notification-update-many-without-account-nested.input';
import { ChatMemberUpdateManyWithoutAccountNestedInput } from '../chat-member/chat-member-update-many-without-account-nested.input';
import { MessageUpdateManyWithoutAccountNestedInput } from '../message/message-update-many-without-account-nested.input';

@InputType()
export class AccountUpdateWithoutGroupMembersInput {

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

    @Field(() => AccountSessionUpdateManyWithoutAccountNestedInput, {nullable:true})
    sessions?: AccountSessionUpdateManyWithoutAccountNestedInput;

    @Field(() => ExternalProfileUpdateManyWithoutAccountNestedInput, {nullable:true})
    externalProfiles?: ExternalProfileUpdateManyWithoutAccountNestedInput;

    @Field(() => EventApplicationUpdateManyWithoutAccountNestedInput, {nullable:true})
    eventApplications?: EventApplicationUpdateManyWithoutAccountNestedInput;

    @Field(() => NotificationUpdateManyWithoutAccountNestedInput, {nullable:true})
    notifications?: NotificationUpdateManyWithoutAccountNestedInput;

    @Field(() => ChatMemberUpdateManyWithoutAccountNestedInput, {nullable:true})
    chatMembers?: ChatMemberUpdateManyWithoutAccountNestedInput;

    @Field(() => MessageUpdateManyWithoutAccountNestedInput, {nullable:true})
    messages?: MessageUpdateManyWithoutAccountNestedInput;
}
