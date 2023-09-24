import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GroupMemberRole } from '../prisma/group-member-role.enum';
import { AccountCreateNestedOneWithoutGroupMembersInput } from '../account/account-create-nested-one-without-group-members.input';

@InputType()
export class GroupMemberCreateWithoutGroupInput {

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => GroupMemberRole, {nullable:true})
    role?: keyof typeof GroupMemberRole;

    @Field(() => AccountCreateNestedOneWithoutGroupMembersInput, {nullable:false})
    account!: AccountCreateNestedOneWithoutGroupMembersInput;
}
