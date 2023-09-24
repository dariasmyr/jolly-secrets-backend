import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ChatMemberWhereUniqueInput } from './chat-member-where-unique.input';
import { Type } from 'class-transformer';
import { ChatMemberCreateInput } from './chat-member-create.input';
import { ChatMemberUpdateInput } from './chat-member-update.input';

@ArgsType()
export class UpsertOneChatMemberArgs {

    @Field(() => ChatMemberWhereUniqueInput, {nullable:false})
    @Type(() => ChatMemberWhereUniqueInput)
    where!: Prisma.AtLeast<ChatMemberWhereUniqueInput, 'id'>;

    @Field(() => ChatMemberCreateInput, {nullable:false})
    @Type(() => ChatMemberCreateInput)
    create!: ChatMemberCreateInput;

    @Field(() => ChatMemberUpdateInput, {nullable:false})
    @Type(() => ChatMemberUpdateInput)
    update!: ChatMemberUpdateInput;
}
