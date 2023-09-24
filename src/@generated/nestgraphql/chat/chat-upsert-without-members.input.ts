import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChatUpdateWithoutMembersInput } from './chat-update-without-members.input';
import { Type } from 'class-transformer';
import { ChatCreateWithoutMembersInput } from './chat-create-without-members.input';
import { ChatWhereInput } from './chat-where.input';

@InputType()
export class ChatUpsertWithoutMembersInput {

    @Field(() => ChatUpdateWithoutMembersInput, {nullable:false})
    @Type(() => ChatUpdateWithoutMembersInput)
    update!: ChatUpdateWithoutMembersInput;

    @Field(() => ChatCreateWithoutMembersInput, {nullable:false})
    @Type(() => ChatCreateWithoutMembersInput)
    create!: ChatCreateWithoutMembersInput;

    @Field(() => ChatWhereInput, {nullable:true})
    @Type(() => ChatWhereInput)
    where?: ChatWhereInput;
}
