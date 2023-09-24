import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GroupMemberRole } from '../prisma/group-member-role.enum';
import { AccountUpdateOneRequiredWithoutGroupMembersNestedInput } from '../account/account-update-one-required-without-group-members-nested.input';

@InputType()
export class GroupMemberUpdateWithoutGroupInput {

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => GroupMemberRole, {nullable:true})
    role?: keyof typeof GroupMemberRole;

    @Field(() => AccountUpdateOneRequiredWithoutGroupMembersNestedInput, {nullable:true})
    account?: AccountUpdateOneRequiredWithoutGroupMembersNestedInput;
}
