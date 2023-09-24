import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ChatMemberWhereInput } from './chat-member-where.input';
import { Type } from 'class-transformer';
import { ChatMemberOrderByWithAggregationInput } from './chat-member-order-by-with-aggregation.input';
import { ChatMemberScalarFieldEnum } from './chat-member-scalar-field.enum';
import { ChatMemberScalarWhereWithAggregatesInput } from './chat-member-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { ChatMemberCountAggregateInput } from './chat-member-count-aggregate.input';
import { ChatMemberAvgAggregateInput } from './chat-member-avg-aggregate.input';
import { ChatMemberSumAggregateInput } from './chat-member-sum-aggregate.input';
import { ChatMemberMinAggregateInput } from './chat-member-min-aggregate.input';
import { ChatMemberMaxAggregateInput } from './chat-member-max-aggregate.input';

@ArgsType()
export class ChatMemberGroupByArgs {

    @Field(() => ChatMemberWhereInput, {nullable:true})
    @Type(() => ChatMemberWhereInput)
    where?: ChatMemberWhereInput;

    @Field(() => [ChatMemberOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<ChatMemberOrderByWithAggregationInput>;

    @Field(() => [ChatMemberScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof ChatMemberScalarFieldEnum>;

    @Field(() => ChatMemberScalarWhereWithAggregatesInput, {nullable:true})
    having?: ChatMemberScalarWhereWithAggregatesInput;

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
