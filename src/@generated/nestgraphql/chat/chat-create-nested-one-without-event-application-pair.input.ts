import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChatCreateWithoutEventApplicationPairInput } from './chat-create-without-event-application-pair.input';
import { Type } from 'class-transformer';
import { ChatCreateOrConnectWithoutEventApplicationPairInput } from './chat-create-or-connect-without-event-application-pair.input';
import { Prisma } from '@prisma/client';
import { ChatWhereUniqueInput } from './chat-where-unique.input';

@InputType()
export class ChatCreateNestedOneWithoutEventApplicationPairInput {

    @Field(() => ChatCreateWithoutEventApplicationPairInput, {nullable:true})
    @Type(() => ChatCreateWithoutEventApplicationPairInput)
    create?: ChatCreateWithoutEventApplicationPairInput;

    @Field(() => ChatCreateOrConnectWithoutEventApplicationPairInput, {nullable:true})
    @Type(() => ChatCreateOrConnectWithoutEventApplicationPairInput)
    connectOrCreate?: ChatCreateOrConnectWithoutEventApplicationPairInput;

    @Field(() => ChatWhereUniqueInput, {nullable:true})
    @Type(() => ChatWhereUniqueInput)
    connect?: Prisma.AtLeast<ChatWhereUniqueInput, 'id'>;
}
