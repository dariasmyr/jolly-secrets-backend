import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { GroupWhereInput } from './group-where.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { EnumGroupTypeFilter } from '../prisma/enum-group-type-filter.input';
import { GroupMemberListRelationFilter } from '../group-member/group-member-list-relation-filter.input';
import { EventListRelationFilter } from '../event/event-list-relation-filter.input';
import { GroupInviteListRelationFilter } from '../group-invite/group-invite-list-relation-filter.input';

@InputType()
export class GroupWhereUniqueInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => [GroupWhereInput], {nullable:true})
    AND?: Array<GroupWhereInput>;

    @Field(() => [GroupWhereInput], {nullable:true})
    OR?: Array<GroupWhereInput>;

    @Field(() => [GroupWhereInput], {nullable:true})
    NOT?: Array<GroupWhereInput>;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => StringFilter, {nullable:true})
    pictureUrl?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    description?: StringFilter;

    @Field(() => EnumGroupTypeFilter, {nullable:true})
    type?: EnumGroupTypeFilter;

    @Field(() => GroupMemberListRelationFilter, {nullable:true})
    members?: GroupMemberListRelationFilter;

    @Field(() => EventListRelationFilter, {nullable:true})
    events?: EventListRelationFilter;

    @Field(() => GroupInviteListRelationFilter, {nullable:true})
    groupInvites?: GroupInviteListRelationFilter;
}
