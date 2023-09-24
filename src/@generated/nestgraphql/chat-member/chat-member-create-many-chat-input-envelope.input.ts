import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChatMemberCreateManyChatInput } from './chat-member-create-many-chat.input';
import { Type } from 'class-transformer';

@InputType()
export class ChatMemberCreateManyChatInputEnvelope {

    @Field(() => [ChatMemberCreateManyChatInput], {nullable:false})
    @Type(() => ChatMemberCreateManyChatInput)
    data!: Array<ChatMemberCreateManyChatInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
