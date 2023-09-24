import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { GroupMemberRole } from '../prisma/group-member-role.enum';
import { GroupMemberCountAggregate } from './group-member-count-aggregate.output';
import { GroupMemberAvgAggregate } from './group-member-avg-aggregate.output';
import { GroupMemberSumAggregate } from './group-member-sum-aggregate.output';
import { GroupMemberMinAggregate } from './group-member-min-aggregate.output';
import { GroupMemberMaxAggregate } from './group-member-max-aggregate.output';

@ObjectType()
export class GroupMemberGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => Int, {nullable:false})
    groupId!: number;

    @Field(() => Int, {nullable:false})
    accountId!: number;

    @Field(() => GroupMemberRole, {nullable:false})
    role!: keyof typeof GroupMemberRole;

    @Field(() => GroupMemberCountAggregate, {nullable:true})
    _count?: GroupMemberCountAggregate;

    @Field(() => GroupMemberAvgAggregate, {nullable:true})
    _avg?: GroupMemberAvgAggregate;

    @Field(() => GroupMemberSumAggregate, {nullable:true})
    _sum?: GroupMemberSumAggregate;

    @Field(() => GroupMemberMinAggregate, {nullable:true})
    _min?: GroupMemberMinAggregate;

    @Field(() => GroupMemberMaxAggregate, {nullable:true})
    _max?: GroupMemberMaxAggregate;
}
