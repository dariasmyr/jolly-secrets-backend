import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class EventApplicationCount {

    @Field(() => Int, {nullable:false})
    preferences?: number;

    @Field(() => Int, {nullable:false})
    eventApplicationFirstPairs?: number;

    @Field(() => Int, {nullable:false})
    eventApplicationSecondPairs?: number;
}
