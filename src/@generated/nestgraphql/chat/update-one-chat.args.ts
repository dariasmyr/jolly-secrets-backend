import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ChatUpdateInput } from './chat-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { ChatWhereUniqueInput } from './chat-where-unique.input';

@ArgsType()
export class UpdateOneChatArgs {

    @Field(() => ChatUpdateInput, {nullable:false})
    @Type(() => ChatUpdateInput)
    data!: ChatUpdateInput;

    @Field(() => ChatWhereUniqueInput, {nullable:false})
    @Type(() => ChatWhereUniqueInput)
    where!: Prisma.AtLeast<ChatWhereUniqueInput, 'id'>;
}
