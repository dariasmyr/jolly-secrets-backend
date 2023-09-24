import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GroupType } from '../prisma/group-type.enum';
import { GroupMemberUpdateManyWithoutGroupNestedInput } from '../group-member/group-member-update-many-without-group-nested.input';
import { GroupInviteUpdateManyWithoutGroupNestedInput } from '../group-invite/group-invite-update-many-without-group-nested.input';

@InputType()
export class GroupUpdateWithoutEventsInput {

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => String, {nullable:true})
    pictureUrl?: string;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => GroupType, {nullable:true})
    type?: keyof typeof GroupType;

    @Field(() => GroupMemberUpdateManyWithoutGroupNestedInput, {nullable:true})
    members?: GroupMemberUpdateManyWithoutGroupNestedInput;

    @Field(() => GroupInviteUpdateManyWithoutGroupNestedInput, {nullable:true})
    groupInvites?: GroupInviteUpdateManyWithoutGroupNestedInput;
}
