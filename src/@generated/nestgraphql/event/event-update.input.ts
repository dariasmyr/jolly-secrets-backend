import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GroupUpdateOneRequiredWithoutEventsNestedInput } from '../group/group-update-one-required-without-events-nested.input';
import { EventApplicationPairUpdateManyWithoutEventNestedInput } from '../event-application-pair/event-application-pair-update-many-without-event-nested.input';

@InputType()
export class EventUpdateInput {

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => String, {nullable:true})
    pictureUrl?: string;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => Date, {nullable:true})
    startsAt?: Date | string;

    @Field(() => Date, {nullable:true})
    endsAt?: Date | string;

    @Field(() => GroupUpdateOneRequiredWithoutEventsNestedInput, {nullable:true})
    group?: GroupUpdateOneRequiredWithoutEventsNestedInput;

    @Field(() => EventApplicationPairUpdateManyWithoutEventNestedInput, {nullable:true})
    applicationPairs?: EventApplicationPairUpdateManyWithoutEventNestedInput;
}
