import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EventWhereInput } from './event-where.input';
import { Type } from 'class-transformer';
import { EventOrderByWithRelationInput } from './event-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { EventWhereUniqueInput } from './event-where-unique.input';
import { Int } from '@nestjs/graphql';
import { EventCountAggregateInput } from './event-count-aggregate.input';
import { EventAvgAggregateInput } from './event-avg-aggregate.input';
import { EventSumAggregateInput } from './event-sum-aggregate.input';
import { EventMinAggregateInput } from './event-min-aggregate.input';
import { EventMaxAggregateInput } from './event-max-aggregate.input';

@ArgsType()
export class EventAggregateArgs {

    @Field(() => EventWhereInput, {nullable:true})
    @Type(() => EventWhereInput)
    where?: EventWhereInput;

    @Field(() => [EventOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<EventOrderByWithRelationInput>;

    @Field(() => EventWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<EventWhereUniqueInput, 'id' | 'groupId_name'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => EventCountAggregateInput, {nullable:true})
    _count?: EventCountAggregateInput;

    @Field(() => EventAvgAggregateInput, {nullable:true})
    _avg?: EventAvgAggregateInput;

    @Field(() => EventSumAggregateInput, {nullable:true})
    _sum?: EventSumAggregateInput;

    @Field(() => EventMinAggregateInput, {nullable:true})
    _min?: EventMinAggregateInput;

    @Field(() => EventMaxAggregateInput, {nullable:true})
    _max?: EventMaxAggregateInput;
}
