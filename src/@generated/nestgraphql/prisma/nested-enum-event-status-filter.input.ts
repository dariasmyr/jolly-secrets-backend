import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventStatus } from './event-status.enum';

@InputType()
export class NestedEnumEventStatusFilter {

    @Field(() => EventStatus, {nullable:true})
    equals?: keyof typeof EventStatus;

    @Field(() => [EventStatus], {nullable:true})
    in?: Array<keyof typeof EventStatus>;

    @Field(() => [EventStatus], {nullable:true})
    notIn?: Array<keyof typeof EventStatus>;

    @Field(() => NestedEnumEventStatusFilter, {nullable:true})
    not?: NestedEnumEventStatusFilter;
}
