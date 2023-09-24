import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GroupMemberWhereInput } from './group-member-where.input';
import { Type } from 'class-transformer';
import { GroupMemberOrderByWithAggregationInput } from './group-member-order-by-with-aggregation.input';
import { GroupMemberScalarFieldEnum } from './group-member-scalar-field.enum';
import { GroupMemberScalarWhereWithAggregatesInput } from './group-member-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { GroupMemberCountAggregateInput } from './group-member-count-aggregate.input';
import { GroupMemberAvgAggregateInput } from './group-member-avg-aggregate.input';
import { GroupMemberSumAggregateInput } from './group-member-sum-aggregate.input';
import { GroupMemberMinAggregateInput } from './group-member-min-aggregate.input';
import { GroupMemberMaxAggregateInput } from './group-member-max-aggregate.input';

@ArgsType()
export class GroupMemberGroupByArgs {

    @Field(() => GroupMemberWhereInput, {nullable:true})
    @Type(() => GroupMemberWhereInput)
    where?: GroupMemberWhereInput;

    @Field(() => [GroupMemberOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<GroupMemberOrderByWithAggregationInput>;

    @Field(() => [GroupMemberScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof GroupMemberScalarFieldEnum>;

    @Field(() => GroupMemberScalarWhereWithAggregatesInput, {nullable:true})
    having?: GroupMemberScalarWhereWithAggregatesInput;

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
