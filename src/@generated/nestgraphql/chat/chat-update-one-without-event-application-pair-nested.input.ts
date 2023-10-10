import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChatCreateWithoutEventApplicationPairInput } from './chat-create-without-event-application-pair.input';
import { Type } from 'class-transformer';
import { ChatCreateOrConnectWithoutEventApplicationPairInput } from './chat-create-or-connect-without-event-application-pair.input';
import { ChatUpsertWithoutEventApplicationPairInput } from './chat-upsert-without-event-application-pair.input';
import { ChatWhereInput } from './chat-where.input';
import { Prisma } from '@prisma/client';
import { ChatWhereUniqueInput } from './chat-where-unique.input';
import { ChatUpdateToOneWithWhereWithoutEventApplicationPairInput } from './chat-update-to-one-with-where-without-event-application-pair.input';

@InputType()
export class ChatUpdateOneWithoutEventApplicationPairNestedInput {

    @Field(() => ChatCreateWithoutEventApplicationPairInput, {nullable:true})
    @Type(() => ChatCreateWithoutEventApplicationPairInput)
    create?: ChatCreateWithoutEventApplicationPairInput;

    @Field(() => ChatCreateOrConnectWithoutEventApplicationPairInput, {nullable:true})
    @Type(() => ChatCreateOrConnectWithoutEventApplicationPairInput)
    connectOrCreate?: ChatCreateOrConnectWithoutEventApplicationPairInput;

    @Field(() => ChatUpsertWithoutEventApplicationPairInput, {nullable:true})
    @Type(() => ChatUpsertWithoutEventApplicationPairInput)
    upsert?: ChatUpsertWithoutEventApplicationPairInput;

    @Field(() => ChatWhereInput, {nullable:true})
    @Type(() => ChatWhereInput)
    disconnect?: ChatWhereInput;

    @Field(() => ChatWhereInput, {nullable:true})
    @Type(() => ChatWhereInput)
    delete?: ChatWhereInput;

    @Field(() => ChatWhereUniqueInput, {nullable:true})
    @Type(() => ChatWhereUniqueInput)
    connect?: Prisma.AtLeast<ChatWhereUniqueInput, 'id'>;

    @Field(() => ChatUpdateToOneWithWhereWithoutEventApplicationPairInput, {nullable:true})
    @Type(() => ChatUpdateToOneWithWhereWithoutEventApplicationPairInput)
    update?: ChatUpdateToOneWithWhereWithoutEventApplicationPairInput;
}
