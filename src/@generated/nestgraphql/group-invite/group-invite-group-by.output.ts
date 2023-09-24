import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { GroupInviteCountAggregate } from './group-invite-count-aggregate.output';
import { GroupInviteAvgAggregate } from './group-invite-avg-aggregate.output';
import { GroupInviteSumAggregate } from './group-invite-sum-aggregate.output';
import { GroupInviteMinAggregate } from './group-invite-min-aggregate.output';
import { GroupInviteMaxAggregate } from './group-invite-max-aggregate.output';

@ObjectType()
export class GroupInviteGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => Int, {nullable:false})
    groupId!: number;

    @Field(() => String, {nullable:false})
    code!: string;

    @Field(() => GroupInviteCountAggregate, {nullable:true})
    _count?: GroupInviteCountAggregate;

    @Field(() => GroupInviteAvgAggregate, {nullable:true})
    _avg?: GroupInviteAvgAggregate;

    @Field(() => GroupInviteSumAggregate, {nullable:true})
    _sum?: GroupInviteSumAggregate;

    @Field(() => GroupInviteMinAggregate, {nullable:true})
    _min?: GroupInviteMinAggregate;

    @Field(() => GroupInviteMaxAggregate, {nullable:true})
    _max?: GroupInviteMaxAggregate;
}
