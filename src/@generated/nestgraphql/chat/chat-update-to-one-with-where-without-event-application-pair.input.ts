import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChatWhereInput } from './chat-where.input';
import { Type } from 'class-transformer';
import { ChatUpdateWithoutEventApplicationPairInput } from './chat-update-without-event-application-pair.input';

@InputType()
export class ChatUpdateToOneWithWhereWithoutEventApplicationPairInput {

    @Field(() => ChatWhereInput, {nullable:true})
    @Type(() => ChatWhereInput)
    where?: ChatWhereInput;

    @Field(() => ChatUpdateWithoutEventApplicationPairInput, {nullable:false})
    @Type(() => ChatUpdateWithoutEventApplicationPairInput)
    data!: ChatUpdateWithoutEventApplicationPairInput;
}
