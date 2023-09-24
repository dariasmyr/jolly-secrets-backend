import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { EnumChatMemberRoleFilter } from '../prisma/enum-chat-member-role-filter.input';

@InputType()
export class ChatMemberScalarWhereInput {

    @Field(() => [ChatMemberScalarWhereInput], {nullable:true})
    AND?: Array<ChatMemberScalarWhereInput>;

    @Field(() => [ChatMemberScalarWhereInput], {nullable:true})
    OR?: Array<ChatMemberScalarWhereInput>;

    @Field(() => [ChatMemberScalarWhereInput], {nullable:true})
    NOT?: Array<ChatMemberScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => IntFilter, {nullable:true})
    accountId?: IntFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    chatId?: IntNullableFilter;

    @Field(() => EnumChatMemberRoleFilter, {nullable:true})
    role?: EnumChatMemberRoleFilter;
}
