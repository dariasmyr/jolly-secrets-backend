import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChatCreateWithoutMembersInput } from './chat-create-without-members.input';
import { Type } from 'class-transformer';
import { ChatCreateOrConnectWithoutMembersInput } from './chat-create-or-connect-without-members.input';
import { Prisma } from '@prisma/client';
import { ChatWhereUniqueInput } from './chat-where-unique.input';

@InputType()
export class ChatCreateNestedOneWithoutMembersInput {

    @Field(() => ChatCreateWithoutMembersInput, {nullable:true})
    @Type(() => ChatCreateWithoutMembersInput)
    create?: ChatCreateWithoutMembersInput;

    @Field(() => ChatCreateOrConnectWithoutMembersInput, {nullable:true})
    @Type(() => ChatCreateOrConnectWithoutMembersInput)
    connectOrCreate?: ChatCreateOrConnectWithoutMembersInput;

    @Field(() => ChatWhereUniqueInput, {nullable:true})
    @Type(() => ChatWhereUniqueInput)
    connect?: Prisma.AtLeast<ChatWhereUniqueInput, 'id'>;
}
