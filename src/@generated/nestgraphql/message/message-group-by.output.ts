import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { MessageCountAggregate } from './message-count-aggregate.output';
import { MessageAvgAggregate } from './message-avg-aggregate.output';
import { MessageSumAggregate } from './message-sum-aggregate.output';
import { MessageMinAggregate } from './message-min-aggregate.output';
import { MessageMaxAggregate } from './message-max-aggregate.output';

@ObjectType()
export class MessageGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => Int, {nullable:false})
    accountId!: number;

    @Field(() => Int, {nullable:true})
    chatId?: number;

    @Field(() => String, {nullable:false})
    text!: string;

    @Field(() => MessageCountAggregate, {nullable:true})
    _count?: MessageCountAggregate;

    @Field(() => MessageAvgAggregate, {nullable:true})
    _avg?: MessageAvgAggregate;

    @Field(() => MessageSumAggregate, {nullable:true})
    _sum?: MessageSumAggregate;

    @Field(() => MessageMinAggregate, {nullable:true})
    _min?: MessageMinAggregate;

    @Field(() => MessageMaxAggregate, {nullable:true})
    _max?: MessageMaxAggregate;
}
