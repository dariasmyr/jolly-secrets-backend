import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ChatMemberWhereInput } from './chat-member-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyChatMemberArgs {

    @Field(() => ChatMemberWhereInput, {nullable:true})
    @Type(() => ChatMemberWhereInput)
    where?: ChatMemberWhereInput;
}
