import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChatMemberCreateManyAccountInput } from './chat-member-create-many-account.input';
import { Type } from 'class-transformer';

@InputType()
export class ChatMemberCreateManyAccountInputEnvelope {

    @Field(() => [ChatMemberCreateManyAccountInput], {nullable:false})
    @Type(() => ChatMemberCreateManyAccountInput)
    data!: Array<ChatMemberCreateManyAccountInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
