import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ChatWhereInput } from './chat-where.input';
import { Type } from 'class-transformer';
import { ChatOrderByWithRelationInput } from './chat-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { ChatWhereUniqueInput } from './chat-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ChatCountAggregateInput } from './chat-count-aggregate.input';
import { ChatAvgAggregateInput } from './chat-avg-aggregate.input';
import { ChatSumAggregateInput } from './chat-sum-aggregate.input';
import { ChatMinAggregateInput } from './chat-min-aggregate.input';
import { ChatMaxAggregateInput } from './chat-max-aggregate.input';

@ArgsType()
export class ChatAggregateArgs {

    @Field(() => ChatWhereInput, {nullable:true})
    @Type(() => ChatWhereInput)
    where?: ChatWhereInput;

    @Field(() => [ChatOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ChatOrderByWithRelationInput>;

    @Field(() => ChatWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<ChatWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => ChatCountAggregateInput, {nullable:true})
    _count?: ChatCountAggregateInput;

    @Field(() => ChatAvgAggregateInput, {nullable:true})
    _avg?: ChatAvgAggregateInput;

    @Field(() => ChatSumAggregateInput, {nullable:true})
    _sum?: ChatSumAggregateInput;

    @Field(() => ChatMinAggregateInput, {nullable:true})
    _min?: ChatMinAggregateInput;

    @Field(() => ChatMaxAggregateInput, {nullable:true})
    _max?: ChatMaxAggregateInput;
}
