import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventApplicationStatus } from './event-application-status.enum';

@InputType()
export class NestedEnumEventApplicationStatusFilter {

    @Field(() => EventApplicationStatus, {nullable:true})
    equals?: keyof typeof EventApplicationStatus;

    @Field(() => [EventApplicationStatus], {nullable:true})
    in?: Array<keyof typeof EventApplicationStatus>;

    @Field(() => [EventApplicationStatus], {nullable:true})
    notIn?: Array<keyof typeof EventApplicationStatus>;

    @Field(() => NestedEnumEventApplicationStatusFilter, {nullable:true})
    not?: NestedEnumEventApplicationStatusFilter;
}
