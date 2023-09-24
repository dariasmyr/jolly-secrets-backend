import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AccountRole } from '../prisma/account-role.enum';
import { AccountStatus } from '../prisma/account-status.enum';
import { AccountSessionUpdateManyWithoutAccountNestedInput } from '../account-session/account-session-update-many-without-account-nested.input';
import { GroupMemberUpdateManyWithoutAccountNestedInput } from '../group-member/group-member-update-many-without-account-nested.input';
import { EventApplicationUpdateManyWithoutAccountNestedInput } from '../event-application/event-application-update-many-without-account-nested.input';
import { NotificationUpdateManyWithoutAccountNestedInput } from '../notification/notification-update-many-without-account-nested.input';

@InputType()
export class AccountUpdateWithoutExternalProfilesInput {

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

    @Field(() => GroupMemberUpdateManyWithoutAccountNestedInput, {nullable:true})
    groupMembers?: GroupMemberUpdateManyWithoutAccountNestedInput;

    @Field(() => EventApplicationUpdateManyWithoutAccountNestedInput, {nullable:true})
    eventApplications?: EventApplicationUpdateManyWithoutAccountNestedInput;

    @Field(() => NotificationUpdateManyWithoutAccountNestedInput, {nullable:true})
    notifications?: NotificationUpdateManyWithoutAccountNestedInput;
}
