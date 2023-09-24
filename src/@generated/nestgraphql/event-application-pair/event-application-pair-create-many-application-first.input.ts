import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class EventApplicationPairCreateManyApplicationFirstInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => Int, {nullable:false})
    eventId!: number;

    @Field(() => Int, {nullable:false})
    eventApplicationSecondId!: number;

    @Field(() => Int, {nullable:false})
    chatId!: number;
}