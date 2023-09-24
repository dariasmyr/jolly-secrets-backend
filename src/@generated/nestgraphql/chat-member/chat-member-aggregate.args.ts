import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ChatMemberWhereInput } from './chat-member-where.input';
import { Type } from 'class-transformer';
import { ChatMemberOrderByWithRelationInput } from './chat-member-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { ChatMemberWhereUniqueInput } from './chat-member-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ChatMemberCountAggregateInput } from './chat-member-count-aggregate.input';
import { ChatMemberAvgAggregateInput } from './chat-member-avg-aggregate.input';
import { ChatMemberSumAggregateInput } from './chat-member-sum-aggregate.input';
import { ChatMemberMinAggregateInput } from './chat-member-min-aggregate.input';
import { ChatMemberMaxAggregateInput } from './chat-member-max-aggregate.input';

@ArgsType()
export class ChatMemberAggregateArgs {

    @Field(() => ChatMemberWhereInput, {nullable:true})
    @Type(() => ChatMemberWhereInput)
    where?: ChatMemberWhereInput;

    @Field(() => [ChatMemberOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ChatMemberOrderByWithRelationInput>;

    @Field(() => ChatMemberWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<ChatMemberWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => ChatMemberCountAggregateInput, {nullable:true})
    _count?: ChatMemberCountAggregateInput;

    @Field(() => ChatMemberAvgAggregateInput, {nullable:true})
    _avg?: ChatMemberAvgAggregateInput;

    @Field(() => ChatMemberSumAggregateInput, {nullable:true})
    _sum?: ChatMemberSumAggregateInput;

    @Field(() => ChatMemberMinAggregateInput, {nullable:true})
    _min?: ChatMemberMinAggregateInput;

    @Field(() => ChatMemberMaxAggregateInput, {nullable:true})
    _max?: ChatMemberMaxAggregateInput;
}
