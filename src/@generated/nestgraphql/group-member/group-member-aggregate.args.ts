import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GroupMemberWhereInput } from './group-member-where.input';
import { Type } from 'class-transformer';
import { GroupMemberOrderByWithRelationInput } from './group-member-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { GroupMemberWhereUniqueInput } from './group-member-where-unique.input';
import { Int } from '@nestjs/graphql';
import { GroupMemberCountAggregateInput } from './group-member-count-aggregate.input';
import { GroupMemberAvgAggregateInput } from './group-member-avg-aggregate.input';
import { GroupMemberSumAggregateInput } from './group-member-sum-aggregate.input';
import { GroupMemberMinAggregateInput } from './group-member-min-aggregate.input';
import { GroupMemberMaxAggregateInput } from './group-member-max-aggregate.input';

@ArgsType()
export class GroupMemberAggregateArgs {

    @Field(() => GroupMemberWhereInput, {nullable:true})
    @Type(() => GroupMemberWhereInput)
    where?: GroupMemberWhereInput;

    @Field(() => [GroupMemberOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<GroupMemberOrderByWithRelationInput>;

    @Field(() => GroupMemberWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<GroupMemberWhereUniqueInput, 'id' | 'groupId_accountId'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => GroupMemberCountAggregateInput, {nullable:true})
    _count?: GroupMemberCountAggregateInput;

    @Field(() => GroupMemberAvgAggregateInput, {nullable:true})
    _avg?: GroupMemberAvgAggregateInput;

    @Field(() => GroupMemberSumAggregateInput, {nullable:true})
    _sum?: GroupMemberSumAggregateInput;

    @Field(() => GroupMemberMinAggregateInput, {nullable:true})
    _min?: GroupMemberMinAggregateInput;

    @Field(() => GroupMemberMaxAggregateInput, {nullable:true})
    _max?: GroupMemberMaxAggregateInput;
}
