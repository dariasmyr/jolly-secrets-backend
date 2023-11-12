import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { GroupType } from '../prisma/group-type.enum';
import { GroupStatus } from '../prisma/group-status.enum';
import { GroupMember } from '../group-member/group-member.model';
import { Event } from '../event/event.model';
import { GroupInvite } from '../group-invite/group-invite.model';
import { GroupCount } from './group-count.output';

@ObjectType()
export class Group {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => String, {nullable:true})
    pictureUrl!: string | null;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => GroupType, {nullable:false})
    type!: keyof typeof GroupType;

    @Field(() => GroupStatus, {nullable:false})
    status!: keyof typeof GroupStatus;

    @Field(() => [GroupMember], {nullable:true})
    members?: Array<GroupMember>;

    @Field(() => [Event], {nullable:true})
    events?: Array<Event>;

    @Field(() => [GroupInvite], {nullable:true})
    groupInvites?: Array<GroupInvite>;

    @Field(() => GroupCount, {nullable:false})
    _count?: GroupCount;
}
