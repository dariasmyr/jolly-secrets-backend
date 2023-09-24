import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { GroupInviteWhereInput } from './group-invite-where.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { GroupRelationFilter } from '../group/group-relation-filter.input';

@InputType()
export class GroupInviteWhereUniqueInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    code?: string;

    @Field(() => [GroupInviteWhereInput], {nullable:true})
    AND?: Array<GroupInviteWhereInput>;

    @Field(() => [GroupInviteWhereInput], {nullable:true})
    OR?: Array<GroupInviteWhereInput>;

    @Field(() => [GroupInviteWhereInput], {nullable:true})
    NOT?: Array<GroupInviteWhereInput>;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => IntFilter, {nullable:true})
    groupId?: IntFilter;

    @Field(() => GroupRelationFilter, {nullable:true})
    group?: GroupRelationFilter;
}
