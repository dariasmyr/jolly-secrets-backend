import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GroupMemberRole } from '../prisma/group-member-role.enum';
import { GroupCreateNestedOneWithoutMembersInput } from '../group/group-create-nested-one-without-members.input';
import { AccountCreateNestedOneWithoutGroupMembersInput } from '../account/account-create-nested-one-without-group-members.input';

@InputType()
export class GroupMemberCreateInput {

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => GroupMemberRole, {nullable:true})
    role?: keyof typeof GroupMemberRole;

    @Field(() => GroupCreateNestedOneWithoutMembersInput, {nullable:false})
    group!: GroupCreateNestedOneWithoutMembersInput;

    @Field(() => AccountCreateNestedOneWithoutGroupMembersInput, {nullable:false})
    account!: AccountCreateNestedOneWithoutGroupMembersInput;
}
