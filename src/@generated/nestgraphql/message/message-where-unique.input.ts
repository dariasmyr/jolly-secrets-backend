import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { MessageWhereInput } from './message-where.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { AccountRelationFilter } from '../account/account-relation-filter.input';
import { ChatNullableRelationFilter } from '../chat/chat-nullable-relation-filter.input';

@InputType()
export class MessageWhereUniqueInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => [MessageWhereInput], {nullable:true})
    AND?: Array<MessageWhereInput>;

    @Field(() => [MessageWhereInput], {nullable:true})
    OR?: Array<MessageWhereInput>;

    @Field(() => [MessageWhereInput], {nullable:true})
    NOT?: Array<MessageWhereInput>;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => IntFilter, {nullable:true})
    accountId?: IntFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    chatId?: IntNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    text?: StringFilter;

    @Field(() => AccountRelationFilter, {nullable:true})
    account?: AccountRelationFilter;

    @Field(() => ChatNullableRelationFilter, {nullable:true})
    chat?: ChatNullableRelationFilter;
}
