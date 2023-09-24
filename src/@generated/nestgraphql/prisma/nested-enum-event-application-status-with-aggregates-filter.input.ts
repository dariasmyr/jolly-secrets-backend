import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventApplicationStatus } from './event-application-status.enum';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumEventApplicationStatusFilter } from './nested-enum-event-application-status-filter.input';

@InputType()
export class NestedEnumEventApplicationStatusWithAggregatesFilter {

    @Field(() => EventApplicationStatus, {nullable:true})
    equals?: keyof typeof EventApplicationStatus;

    @Field(() => [EventApplicationStatus], {nullable:true})
    in?: Array<keyof typeof EventApplicationStatus>;

    @Field(() => [EventApplicationStatus], {nullable:true})
    notIn?: Array<keyof typeof EventApplicationStatus>;

    @Field(() => NestedEnumEventApplicationStatusWithAggregatesFilter, {nullable:true})
    not?: NestedEnumEventApplicationStatusWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumEventApplicationStatusFilter, {nullable:true})
    _min?: NestedEnumEventApplicationStatusFilter;

    @Field(() => NestedEnumEventApplicationStatusFilter, {nullable:true})
    _max?: NestedEnumEventApplicationStatusFilter;
}
