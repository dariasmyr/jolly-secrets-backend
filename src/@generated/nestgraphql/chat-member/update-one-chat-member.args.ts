import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ChatMemberUpdateInput } from './chat-member-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { ChatMemberWhereUniqueInput } from './chat-member-where-unique.input';

@ArgsType()
export class UpdateOneChatMemberArgs {

    @Field(() => ChatMemberUpdateInput, {nullable:false})
    @Type(() => ChatMemberUpdateInput)
    data!: ChatMemberUpdateInput;

    @Field(() => ChatMemberWhereUniqueInput, {nullable:false})
    @Type(() => ChatMemberWhereUniqueInput)
    where!: Prisma.AtLeast<ChatMemberWhereUniqueInput, 'id'>;
}
