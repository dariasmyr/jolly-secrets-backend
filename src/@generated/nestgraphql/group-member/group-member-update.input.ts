import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GroupMemberRole } from '../prisma/group-member-role.enum';
import { GroupUpdateOneRequiredWithoutMembersNestedInput } from '../group/group-update-one-required-without-members-nested.input';
import { AccountUpdateOneRequiredWithoutGroupMembersNestedInput } from '../account/account-update-one-required-without-group-members-nested.input';

@InputType()
export class GroupMemberUpdateInput {

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => GroupMemberRole, {nullable:true})
    role?: keyof typeof GroupMemberRole;

    @Field(() => GroupUpdateOneRequiredWithoutMembersNestedInput, {nullable:true})
    group?: GroupUpdateOneRequiredWithoutMembersNestedInput;

    @Field(() => AccountUpdateOneRequiredWithoutGroupMembersNestedInput, {nullable:true})
    account?: AccountUpdateOneRequiredWithoutGroupMembersNestedInput;
}
