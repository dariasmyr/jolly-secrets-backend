import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class ChatScalarWhereWithAggregatesInput {

    @Field(() => [ChatScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<ChatScalarWhereWithAggregatesInput>;

    @Field(() => [ChatScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<ChatScalarWhereWithAggregatesInput>;

    @Field(() => [ChatScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<ChatScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;
}
