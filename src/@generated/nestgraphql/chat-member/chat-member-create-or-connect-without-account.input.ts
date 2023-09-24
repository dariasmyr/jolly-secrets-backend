import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ChatMemberWhereUniqueInput } from './chat-member-where-unique.input';
import { Type } from 'class-transformer';
import { ChatMemberCreateWithoutAccountInput } from './chat-member-create-without-account.input';

@InputType()
export class ChatMemberCreateOrConnectWithoutAccountInput {

    @Field(() => ChatMemberWhereUniqueInput, {nullable:false})
    @Type(() => ChatMemberWhereUniqueInput)
    where!: Prisma.AtLeast<ChatMemberWhereUniqueInput, 'id'>;

    @Field(() => ChatMemberCreateWithoutAccountInput, {nullable:false})
    @Type(() => ChatMemberCreateWithoutAccountInput)
    create!: ChatMemberCreateWithoutAccountInput;
}
