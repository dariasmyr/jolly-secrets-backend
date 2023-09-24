import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { IntNullableWithAggregatesFilter } from '../prisma/int-nullable-with-aggregates-filter.input';
import { EnumChatMemberRoleWithAggregatesFilter } from '../prisma/enum-chat-member-role-with-aggregates-filter.input';

@InputType()
export class ChatMemberScalarWhereWithAggregatesInput {

    @Field(() => [ChatMemberScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<ChatMemberScalarWhereWithAggregatesInput>;

    @Field(() => [ChatMemberScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<ChatMemberScalarWhereWithAggregatesInput>;

    @Field(() => [ChatMemberScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<ChatMemberScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    accountId?: IntWithAggregatesFilter;

    @Field(() => IntNullableWithAggregatesFilter, {nullable:true})
    chatId?: IntNullableWithAggregatesFilter;

    @Field(() => EnumChatMemberRoleWithAggregatesFilter, {nullable:true})
    role?: EnumChatMemberRoleWithAggregatesFilter;
}
