import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChatUpdateWithoutEventApplicationPairInput } from './chat-update-without-event-application-pair.input';
import { Type } from 'class-transformer';
import { ChatCreateWithoutEventApplicationPairInput } from './chat-create-without-event-application-pair.input';
import { ChatWhereInput } from './chat-where.input';

@InputType()
export class ChatUpsertWithoutEventApplicationPairInput {

    @Field(() => ChatUpdateWithoutEventApplicationPairInput, {nullable:false})
    @Type(() => ChatUpdateWithoutEventApplicationPairInput)
    update!: ChatUpdateWithoutEventApplicationPairInput;

    @Field(() => ChatCreateWithoutEventApplicationPairInput, {nullable:false})
    @Type(() => ChatCreateWithoutEventApplicationPairInput)
    create!: ChatCreateWithoutEventApplicationPairInput;

    @Field(() => ChatWhereInput, {nullable:true})
    @Type(() => ChatWhereInput)
    where?: ChatWhereInput;
}
