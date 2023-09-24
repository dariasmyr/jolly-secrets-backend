import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { GroupMemberCountAggregate } from './group-member-count-aggregate.output';
import { GroupMemberAvgAggregate } from './group-member-avg-aggregate.output';
import { GroupMemberSumAggregate } from './group-member-sum-aggregate.output';
import { GroupMemberMinAggregate } from './group-member-min-aggregate.output';
import { GroupMemberMaxAggregate } from './group-member-max-aggregate.output';

@ObjectType()
export class AggregateGroupMember {

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
