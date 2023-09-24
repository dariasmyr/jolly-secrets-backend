import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ChatMemberRole } from '../prisma/chat-member-role.enum';
import { Account } from '../account/account.model';
import { Chat } from '../chat/chat.model';

@ObjectType()
export class ChatMember {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => Int, {nullable:false})
    accountId!: number;

    @Field(() => Int, {nullable:true})
    chatId!: number | null;

    @Field(() => ChatMemberRole, {nullable:false,defaultValue:'MEMBER'})
    role!: keyof typeof ChatMemberRole;

    @Field(() => Account, {nullable:false})
    account?: Account;

    @Field(() => Chat, {nullable:true})
    chat?: Chat | null;
}
