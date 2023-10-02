import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GroupType } from '../prisma/group-type.enum';
import { GroupStatus } from '../prisma/group-status.enum';
import { GroupMemberUpdateManyWithoutGroupNestedInput } from '../group-member/group-member-update-many-without-group-nested.input';
import { EventUpdateManyWithoutGroupNestedInput } from '../event/event-update-many-without-group-nested.input';

@InputType()
export class GroupUpdateWithoutGroupInvitesInput {

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

    @Field(() => GroupMemberUpdateManyWithoutGroupNestedInput, {nullable:true})
    members?: GroupMemberUpdateManyWithoutGroupNestedInput;

    @Field(() => EventUpdateManyWithoutGroupNestedInput, {nullable:true})
    events?: EventUpdateManyWithoutGroupNestedInput;
}
