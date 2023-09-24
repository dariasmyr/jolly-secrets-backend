import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ChatWhereUniqueInput } from './chat-where-unique.input';
import { Type } from 'class-transformer';
import { ChatCreateWithoutMembersInput } from './chat-create-without-members.input';

@InputType()
export class ChatCreateOrConnectWithoutMembersInput {

    @Field(() => ChatWhereUniqueInput, {nullable:false})
    @Type(() => ChatWhereUniqueInput)
    where!: Prisma.AtLeast<ChatWhereUniqueInput, 'id'>;

    @Field(() => ChatCreateWithoutMembersInput, {nullable:false})
    @Type(() => ChatCreateWithoutMembersInput)
    create!: ChatCreateWithoutMembersInput;
}
