import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GroupInviteWhereInput } from './group-invite-where.input';
import { Type } from 'class-transformer';
import { GroupInviteOrderByWithAggregationInput } from './group-invite-order-by-with-aggregation.input';
import { GroupInviteScalarFieldEnum } from './group-invite-scalar-field.enum';
import { GroupInviteScalarWhereWithAggregatesInput } from './group-invite-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { GroupInviteCountAggregateInput } from './group-invite-count-aggregate.input';
import { GroupInviteAvgAggregateInput } from './group-invite-avg-aggregate.input';
import { GroupInviteSumAggregateInput } from './group-invite-sum-aggregate.input';
import { GroupInviteMinAggregateInput } from './group-invite-min-aggregate.input';
import { GroupInviteMaxAggregateInput } from './group-invite-max-aggregate.input';

@ArgsType()
export class GroupInviteGroupByArgs {

    @Field(() => GroupInviteWhereInput, {nullable:true})
    @Type(() => GroupInviteWhereInput)
    where?: GroupInviteWhereInput;

    @Field(() => [GroupInviteOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<GroupInviteOrderByWithAggregationInput>;

    @Field(() => [GroupInviteScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof GroupInviteScalarFieldEnum>;

    @Field(() => GroupInviteScalarWhereWithAggregatesInput, {nullable:true})
    having?: GroupInviteScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => GroupInviteCountAggregateInput, {nullable:true})
    _count?: GroupInviteCountAggregateInput;

    @Field(() => GroupInviteAvgAggregateInput, {nullable:true})
    _avg?: GroupInviteAvgAggregateInput;

    @Field(() => GroupInviteSumAggregateInput, {nullable:true})
    _sum?: GroupInviteSumAggregateInput;

    @Field(() => GroupInviteMinAggregateInput, {nullable:true})
    _min?: GroupInviteMinAggregateInput;

    @Field(() => GroupInviteMaxAggregateInput, {nullable:true})
    _max?: GroupInviteMaxAggregateInput;
}
