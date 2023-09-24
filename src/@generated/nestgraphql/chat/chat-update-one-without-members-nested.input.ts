import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChatCreateWithoutMembersInput } from './chat-create-without-members.input';
import { Type } from 'class-transformer';
import { ChatCreateOrConnectWithoutMembersInput } from './chat-create-or-connect-without-members.input';
import { ChatUpsertWithoutMembersInput } from './chat-upsert-without-members.input';
import { ChatWhereInput } from './chat-where.input';
import { Prisma } from '@prisma/client';
import { ChatWhereUniqueInput } from './chat-where-unique.input';
import { ChatUpdateToOneWithWhereWithoutMembersInput } from './chat-update-to-one-with-where-without-members.input';

@InputType()
export class ChatUpdateOneWithoutMembersNestedInput {

    @Field(() => ChatCreateWithoutMembersInput, {nullable:true})
    @Type(() => ChatCreateWithoutMembersInput)
    create?: ChatCreateWithoutMembersInput;

    @Field(() => ChatCreateOrConnectWithoutMembersInput, {nullable:true})
    @Type(() => ChatCreateOrConnectWithoutMembersInput)
    connectOrCreate?: ChatCreateOrConnectWithoutMembersInput;

    @Field(() => ChatUpsertWithoutMembersInput, {nullable:true})
    @Type(() => ChatUpsertWithoutMembersInput)
    upsert?: ChatUpsertWithoutMembersInput;

    @Field(() => ChatWhereInput, {nullable:true})
    @Type(() => ChatWhereInput)
    disconnect?: ChatWhereInput;

    @Field(() => ChatWhereInput, {nullable:true})
    @Type(() => ChatWhereInput)
    delete?: ChatWhereInput;

    @Field(() => ChatWhereUniqueInput, {nullable:true})
    @Type(() => ChatWhereUniqueInput)
    connect?: Prisma.AtLeast<ChatWhereUniqueInput, 'id'>;

    @Field(() => ChatUpdateToOneWithWhereWithoutMembersInput, {nullable:true})
    @Type(() => ChatUpdateToOneWithWhereWithoutMembersInput)
    update?: ChatUpdateToOneWithWhereWithoutMembersInput;
}
