import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ChatWhereUniqueInput } from './chat-where-unique.input';
import { Type } from 'class-transformer';
import { ChatCreateWithoutEventApplicationPairInput } from './chat-create-without-event-application-pair.input';

@InputType()
export class ChatCreateOrConnectWithoutEventApplicationPairInput {

    @Field(() => ChatWhereUniqueInput, {nullable:false})
    @Type(() => ChatWhereUniqueInput)
    where!: Prisma.AtLeast<ChatWhereUniqueInput, 'id'>;

    @Field(() => ChatCreateWithoutEventApplicationPairInput, {nullable:false})
    @Type(() => ChatCreateWithoutEventApplicationPairInput)
    create!: ChatCreateWithoutEventApplicationPairInput;
}
