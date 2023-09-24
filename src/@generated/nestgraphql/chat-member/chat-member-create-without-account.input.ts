import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChatMemberRole } from '../prisma/chat-member-role.enum';
import { ChatCreateNestedOneWithoutMembersInput } from '../chat/chat-create-nested-one-without-members.input';

@InputType()
export class ChatMemberCreateWithoutAccountInput {

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => ChatMemberRole, {nullable:true})
    role?: keyof typeof ChatMemberRole;

    @Field(() => ChatCreateNestedOneWithoutMembersInput, {nullable:true})
    chat?: ChatCreateNestedOneWithoutMembersInput;
}
