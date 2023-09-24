import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChatWhereInput } from './chat-where.input';
import { Type } from 'class-transformer';
import { ChatUpdateWithoutMembersInput } from './chat-update-without-members.input';

@InputType()
export class ChatUpdateToOneWithWhereWithoutMembersInput {

    @Field(() => ChatWhereInput, {nullable:true})
    @Type(() => ChatWhereInput)
    where?: ChatWhereInput;

    @Field(() => ChatUpdateWithoutMembersInput, {nullable:false})
    @Type(() => ChatUpdateWithoutMembersInput)
    data!: ChatUpdateWithoutMembersInput;
}
