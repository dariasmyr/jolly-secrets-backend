import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EventApplicationWhereInput } from './event-application-where.input';
import { Type } from 'class-transformer';
import { EventApplicationOrderByWithRelationInput } from './event-application-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { EventApplicationWhereUniqueInput } from './event-application-where-unique.input';
import { Int } from '@nestjs/graphql';
import { EventApplicationCountAggregateInput } from './event-application-count-aggregate.input';
import { EventApplicationAvgAggregateInput } from './event-application-avg-aggregate.input';
import { EventApplicationSumAggregateInput } from './event-application-sum-aggregate.input';
import { EventApplicationMinAggregateInput } from './event-application-min-aggregate.input';
import { EventApplicationMaxAggregateInput } from './event-application-max-aggregate.input';

@ArgsType()
export class EventApplicationAggregateArgs {

    @Field(() => EventApplicationWhereInput, {nullable:true})
    @Type(() => EventApplicationWhereInput)
    where?: EventApplicationWhereInput;

    @Field(() => [EventApplicationOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<EventApplicationOrderByWithRelationInput>;

    @Field(() => EventApplicationWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<EventApplicationWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => EventApplicationCountAggregateInput, {nullable:true})
    _count?: EventApplicationCountAggregateInput;

    @Field(() => EventApplicationAvgAggregateInput, {nullable:true})
    _avg?: EventApplicationAvgAggregateInput;

    @Field(() => EventApplicationSumAggregateInput, {nullable:true})
    _sum?: EventApplicationSumAggregateInput;

    @Field(() => EventApplicationMinAggregateInput, {nullable:true})
    _min?: EventApplicationMinAggregateInput;

    @Field(() => EventApplicationMaxAggregateInput, {nullable:true})
    _max?: EventApplicationMaxAggregateInput;
}
