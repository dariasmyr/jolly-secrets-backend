import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class EventApplicationPairCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    createdAt!: number;

    @Field(() => Int, {nullable:false})
    updatedAt!: number;

    @Field(() => Int, {nullable:false})
    eventId!: number;

    @Field(() => Int, {nullable:false})
    eventApplicationFirstId!: number;

    @Field(() => Int, {nullable:false})
    eventApplicationSecondId!: number;

    @Field(() => Int, {nullable:false})
    chatId!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
