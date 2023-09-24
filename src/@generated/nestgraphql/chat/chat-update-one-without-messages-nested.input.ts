import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChatCreateWithoutMessagesInput } from './chat-create-without-messages.input';
import { Type } from 'class-transformer';
import { ChatCreateOrConnectWithoutMessagesInput } from './chat-create-or-connect-without-messages.input';
import { ChatUpsertWithoutMessagesInput } from './chat-upsert-without-messages.input';
import { ChatWhereInput } from './chat-where.input';
import { Prisma } from '@prisma/client';
import { ChatWhereUniqueInput } from './chat-where-unique.input';
import { ChatUpdateToOneWithWhereWithoutMessagesInput } from './chat-update-to-one-with-where-without-messages.input';

@InputType()
export class ChatUpdateOneWithoutMessagesNestedInput {

    @Field(() => ChatCreateWithoutMessagesInput, {nullable:true})
    @Type(() => ChatCreateWithoutMessagesInput)
    create?: ChatCreateWithoutMessagesInput;

    @Field(() => ChatCreateOrConnectWithoutMessagesInput, {nullable:true})
    @Type(() => ChatCreateOrConnectWithoutMessagesInput)
    connectOrCreate?: ChatCreateOrConnectWithoutMessagesInput;

    @Field(() => ChatUpsertWithoutMessagesInput, {nullable:true})
    @Type(() => ChatUpsertWithoutMessagesInput)
    upsert?: ChatUpsertWithoutMessagesInput;

    @Field(() => ChatWhereInput, {nullable:true})
    @Type(() => ChatWhereInput)
    disconnect?: ChatWhereInput;

    @Field(() => ChatWhereInput, {nullable:true})
    @Type(() => ChatWhereInput)
    delete?: ChatWhereInput;

    @Field(() => ChatWhereUniqueInput, {nullable:true})
    @Type(() => ChatWhereUniqueInput)
    connect?: Prisma.AtLeast<ChatWhereUniqueInput, 'id'>;

    @Field(() => ChatUpdateToOneWithWhereWithoutMessagesInput, {nullable:true})
    @Type(() => ChatUpdateToOneWithWhereWithoutMessagesInput)
    update?: ChatUpdateToOneWithWhereWithoutMessagesInput;
}
