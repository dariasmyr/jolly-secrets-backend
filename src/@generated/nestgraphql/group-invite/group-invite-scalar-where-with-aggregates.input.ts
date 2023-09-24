import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';

@InputType()
export class GroupInviteScalarWhereWithAggregatesInput {

    @Field(() => [GroupInviteScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<GroupInviteScalarWhereWithAggregatesInput>;

    @Field(() => [GroupInviteScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<GroupInviteScalarWhereWithAggregatesInput>;

    @Field(() => [GroupInviteScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<GroupInviteScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    groupId?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    code?: StringWithAggregatesFilter;
}
