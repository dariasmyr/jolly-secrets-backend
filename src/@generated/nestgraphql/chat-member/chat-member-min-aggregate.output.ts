import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ChatMemberRole } from '../prisma/chat-member-role.enum';

@ObjectType()
export class ChatMemberMinAggregate {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => Int, {nullable:true})
    accountId?: number;

    @Field(() => Int, {nullable:true})
    chatId?: number;

    @Field(() => ChatMemberRole, {nullable:true})
    role?: keyof typeof ChatMemberRole;
}
