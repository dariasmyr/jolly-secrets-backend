import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { GroupType } from '../prisma/group-type.enum';
import { GroupStatus } from '../prisma/group-status.enum';
import { EventUncheckedUpdateManyWithoutGroupNestedInput } from '../event/event-unchecked-update-many-without-group-nested.input';
import { GroupInviteUncheckedUpdateManyWithoutGroupNestedInput } from '../group-invite/group-invite-unchecked-update-many-without-group-nested.input';

@InputType()
export class GroupUncheckedUpdateWithoutMembersInput {

    @Field(() => Int, {nullable:true})
    id?: number;

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

    @Field(() => GroupStatus, {nullable:true})
    status?: keyof typeof GroupStatus;

    @Field(() => EventUncheckedUpdateManyWithoutGroupNestedInput, {nullable:true})
    events?: EventUncheckedUpdateManyWithoutGroupNestedInput;

    @Field(() => GroupInviteUncheckedUpdateManyWithoutGroupNestedInput, {nullable:true})
    groupInvites?: GroupInviteUncheckedUpdateManyWithoutGroupNestedInput;
}
