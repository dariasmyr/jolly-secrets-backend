import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GroupMemberRole } from '../prisma/group-member-role.enum';
import { GroupUpdateOneRequiredWithoutMembersNestedInput } from '../group/group-update-one-required-without-members-nested.input';

@InputType()
export class GroupMemberUpdateWithoutAccountInput {

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => GroupMemberRole, {nullable:true})
    role?: keyof typeof GroupMemberRole;

    @Field(() => GroupUpdateOneRequiredWithoutMembersNestedInput, {nullable:true})
    group?: GroupUpdateOneRequiredWithoutMembersNestedInput;
}
