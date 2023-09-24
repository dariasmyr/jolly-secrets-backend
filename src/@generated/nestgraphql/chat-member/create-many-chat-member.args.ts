import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ChatMemberCreateManyInput } from './chat-member-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyChatMemberArgs {

    @Field(() => [ChatMemberCreateManyInput], {nullable:false})
    @Type(() => ChatMemberCreateManyInput)
    data!: Array<ChatMemberCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
