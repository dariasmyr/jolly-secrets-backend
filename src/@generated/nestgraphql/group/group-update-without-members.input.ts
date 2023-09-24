import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GroupType } from '../prisma/group-type.enum';
import { EventUpdateManyWithoutGroupNestedInput } from '../event/event-update-many-without-group-nested.input';
import { GroupInviteUpdateManyWithoutGroupNestedInput } from '../group-invite/group-invite-update-many-without-group-nested.input';

@InputType()
export class GroupUpdateWithoutMembersInput {

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

    @Field(() => EventUpdateManyWithoutGroupNestedInput, {nullable:true})
    events?: EventUpdateManyWithoutGroupNestedInput;

    @Field(() => GroupInviteUpdateManyWithoutGroupNestedInput, {nullable:true})
    groupInvites?: GroupInviteUpdateManyWithoutGroupNestedInput;
}
