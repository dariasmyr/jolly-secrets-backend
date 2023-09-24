import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChatMemberWhereInput } from './chat-member-where.input';

@InputType()
export class ChatMemberListRelationFilter {

    @Field(() => ChatMemberWhereInput, {nullable:true})
    every?: ChatMemberWhereInput;

    @Field(() => ChatMemberWhereInput, {nullable:true})
    some?: ChatMemberWhereInput;

    @Field(() => ChatMemberWhereInput, {nullable:true})
    none?: ChatMemberWhereInput;
}
