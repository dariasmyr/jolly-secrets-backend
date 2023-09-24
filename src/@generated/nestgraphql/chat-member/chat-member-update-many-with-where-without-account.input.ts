import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChatMemberScalarWhereInput } from './chat-member-scalar-where.input';
import { Type } from 'class-transformer';
import { ChatMemberUpdateManyMutationInput } from './chat-member-update-many-mutation.input';

@InputType()
export class ChatMemberUpdateManyWithWhereWithoutAccountInput {

    @Field(() => ChatMemberScalarWhereInput, {nullable:false})
    @Type(() => ChatMemberScalarWhereInput)
    where!: ChatMemberScalarWhereInput;

    @Field(() => ChatMemberUpdateManyMutationInput, {nullable:false})
    @Type(() => ChatMemberUpdateManyMutationInput)
    data!: ChatMemberUpdateManyMutationInput;
}
