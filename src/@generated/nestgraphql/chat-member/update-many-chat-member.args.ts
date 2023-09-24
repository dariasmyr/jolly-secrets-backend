import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ChatMemberUpdateManyMutationInput } from './chat-member-update-many-mutation.input';
import { Type } from 'class-transformer';
import { ChatMemberWhereInput } from './chat-member-where.input';

@ArgsType()
export class UpdateManyChatMemberArgs {

    @Field(() => ChatMemberUpdateManyMutationInput, {nullable:false})
    @Type(() => ChatMemberUpdateManyMutationInput)
    data!: ChatMemberUpdateManyMutationInput;

    @Field(() => ChatMemberWhereInput, {nullable:true})
    @Type(() => ChatMemberWhereInput)
    where?: ChatMemberWhereInput;
}
