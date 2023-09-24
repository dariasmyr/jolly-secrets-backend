import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ChatMemberCreateInput } from './chat-member-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneChatMemberArgs {

    @Field(() => ChatMemberCreateInput, {nullable:false})
    @Type(() => ChatMemberCreateInput)
    data!: ChatMemberCreateInput;
}
