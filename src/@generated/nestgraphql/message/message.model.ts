import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Account } from '../account/account.model';
import { Chat } from '../chat/chat.model';

@ObjectType()
export class Message {

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

    @Field(() => String, {nullable:false})
    text!: string;

    @Field(() => Account, {nullable:false})
    account?: Account;

    @Field(() => Chat, {nullable:true})
    chat?: Chat | null;
}
