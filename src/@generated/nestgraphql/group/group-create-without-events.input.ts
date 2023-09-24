import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GroupType } from '../prisma/group-type.enum';
import { GroupMemberCreateNestedManyWithoutGroupInput } from '../group-member/group-member-create-nested-many-without-group.input';
import { GroupInviteCreateNestedManyWithoutGroupInput } from '../group-invite/group-invite-create-nested-many-without-group.input';

@InputType()
export class GroupCreateWithoutEventsInput {

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => String, {nullable:false})
    pictureUrl!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => GroupType, {nullable:false})
    type!: keyof typeof GroupType;

    @Field(() => GroupMemberCreateNestedManyWithoutGroupInput, {nullable:true})
    members?: GroupMemberCreateNestedManyWithoutGroupInput;

    @Field(() => GroupInviteCreateNestedManyWithoutGroupInput, {nullable:true})
    groupInvites?: GroupInviteCreateNestedManyWithoutGroupInput;
}
