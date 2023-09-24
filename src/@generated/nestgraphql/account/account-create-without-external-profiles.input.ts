import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AccountRole } from '../prisma/account-role.enum';
import { AccountStatus } from '../prisma/account-status.enum';
import { AccountSessionCreateNestedManyWithoutAccountInput } from '../account-session/account-session-create-nested-many-without-account.input';
import { GroupMemberCreateNestedManyWithoutAccountInput } from '../group-member/group-member-create-nested-many-without-account.input';
import { EventApplicationCreateNestedManyWithoutAccountInput } from '../event-application/event-application-create-nested-many-without-account.input';
import { NotificationCreateNestedManyWithoutAccountInput } from '../notification/notification-create-nested-many-without-account.input';

@InputType()
export class AccountCreateWithoutExternalProfilesInput {

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => String, {nullable:true})
    email?: string;

    @Field(() => [AccountRole], {nullable:true})
    roles?: Array<keyof typeof AccountRole>;

    @Field(() => AccountStatus, {nullable:false})
    status!: keyof typeof AccountStatus;

    @Field(() => String, {nullable:true})
    avatarUrl?: string;

    @Field(() => String, {nullable:false})
    username!: string;

    @Field(() => AccountSessionCreateNestedManyWithoutAccountInput, {nullable:true})
    sessions?: AccountSessionCreateNestedManyWithoutAccountInput;

    @Field(() => GroupMemberCreateNestedManyWithoutAccountInput, {nullable:true})
    groupMembers?: GroupMemberCreateNestedManyWithoutAccountInput;

    @Field(() => EventApplicationCreateNestedManyWithoutAccountInput, {nullable:true})
    eventApplications?: EventApplicationCreateNestedManyWithoutAccountInput;

    @Field(() => NotificationCreateNestedManyWithoutAccountInput, {nullable:true})
    notifications?: NotificationCreateNestedManyWithoutAccountInput;
}
