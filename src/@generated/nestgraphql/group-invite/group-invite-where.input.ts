import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { GroupRelationFilter } from '../group/group-relation-filter.input';

@InputType()
export class GroupInviteWhereInput {

    @Field(() => [GroupInviteWhereInput], {nullable:true})
    AND?: Array<GroupInviteWhereInput>;

    @Field(() => [GroupInviteWhereInput], {nullable:true})
    OR?: Array<GroupInviteWhereInput>;

    @Field(() => [GroupInviteWhereInput], {nullable:true})
    NOT?: Array<GroupInviteWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => IntFilter, {nullable:true})
    groupId?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    code?: StringFilter;

    @Field(() => GroupRelationFilter, {nullable:true})
    group?: GroupRelationFilter;
}
