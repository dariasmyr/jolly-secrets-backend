import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { GroupType } from '../prisma/group-type.enum';
import { GroupStatus } from '../prisma/group-status.enum';
import { GroupMemberUncheckedCreateNestedManyWithoutGroupInput } from '../group-member/group-member-unchecked-create-nested-many-without-group.input';
import { GroupInviteUncheckedCreateNestedManyWithoutGroupInput } from '../group-invite/group-invite-unchecked-create-nested-many-without-group.input';

@InputType()
export class GroupUncheckedCreateWithoutEventsInput {

    @Field(() => Int, {nullable:true})
    id?: number;

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

    @Field(() => GroupStatus, {nullable:false})
    status!: keyof typeof GroupStatus;

    @Field(() => GroupMemberUncheckedCreateNestedManyWithoutGroupInput, {nullable:true})
    members?: GroupMemberUncheckedCreateNestedManyWithoutGroupInput;

    @Field(() => GroupInviteUncheckedCreateNestedManyWithoutGroupInput, {nullable:true})
    groupInvites?: GroupInviteUncheckedCreateNestedManyWithoutGroupInput;
}
