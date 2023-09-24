import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChatMemberRole } from '../prisma/chat-member-role.enum';

@InputType()
export class ChatMemberUpdateManyMutationInput {

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => ChatMemberRole, {nullable:true})
    role?: keyof typeof ChatMemberRole;
}
