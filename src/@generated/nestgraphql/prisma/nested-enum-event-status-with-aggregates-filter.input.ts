import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventStatus } from './event-status.enum';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumEventStatusFilter } from './nested-enum-event-status-filter.input';

@InputType()
export class NestedEnumEventStatusWithAggregatesFilter {

    @Field(() => EventStatus, {nullable:true})
    equals?: keyof typeof EventStatus;

    @Field(() => [EventStatus], {nullable:true})
    in?: Array<keyof typeof EventStatus>;

    @Field(() => [EventStatus], {nullable:true})
    notIn?: Array<keyof typeof EventStatus>;

    @Field(() => NestedEnumEventStatusWithAggregatesFilter, {nullable:true})
    not?: NestedEnumEventStatusWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumEventStatusFilter, {nullable:true})
    _min?: NestedEnumEventStatusFilter;

    @Field(() => NestedEnumEventStatusFilter, {nullable:true})
    _max?: NestedEnumEventStatusFilter;
}
