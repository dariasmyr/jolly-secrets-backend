import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { EnumGroupTypeWithAggregatesFilter } from '../prisma/enum-group-type-with-aggregates-filter.input';

@InputType()
export class GroupScalarWhereWithAggregatesInput {

    @Field(() => [GroupScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<GroupScalarWhereWithAggregatesInput>;

    @Field(() => [GroupScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<GroupScalarWhereWithAggregatesInput>;

    @Field(() => [GroupScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<GroupScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    pictureUrl?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    description?: StringWithAggregatesFilter;

    @Field(() => EnumGroupTypeWithAggregatesFilter, {nullable:true})
    type?: EnumGroupTypeWithAggregatesFilter;
}
