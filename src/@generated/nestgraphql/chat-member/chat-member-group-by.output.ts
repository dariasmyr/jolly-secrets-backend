import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ChatMemberRole } from '../prisma/chat-member-role.enum';
import { ChatMemberCountAggregate } from './chat-member-count-aggregate.output';
import { ChatMemberAvgAggregate } from './chat-member-avg-aggregate.output';
import { ChatMemberSumAggregate } from './chat-member-sum-aggregate.output';
import { ChatMemberMinAggregate } from './chat-member-min-aggregate.output';
import { ChatMemberMaxAggregate } from './chat-member-max-aggregate.output';

@ObjectType()
export class ChatMemberGroupBy {

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

    @Field(() => ChatMemberRole, {nullable:false})
    role!: keyof typeof ChatMemberRole;

    @Field(() => ChatMemberCountAggregate, {nullable:true})
    _count?: ChatMemberCountAggregate;

    @Field(() => ChatMemberAvgAggregate, {nullable:true})
    _avg?: ChatMemberAvgAggregate;

    @Field(() => ChatMemberSumAggregate, {nullable:true})
    _sum?: ChatMemberSumAggregate;

    @Field(() => ChatMemberMinAggregate, {nullable:true})
    _min?: ChatMemberMinAggregate;

    @Field(() => ChatMemberMaxAggregate, {nullable:true})
    _max?: ChatMemberMaxAggregate;
}
