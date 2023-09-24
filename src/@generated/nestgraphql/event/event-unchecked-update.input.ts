import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { EventApplicationPairUncheckedUpdateManyWithoutEventNestedInput } from '../event-application-pair/event-application-pair-unchecked-update-many-without-event-nested.input';

@InputType()
export class EventUncheckedUpdateInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => String, {nullable:true})
    pictureUrl?: string;

    @Field(() => Int, {nullable:true})
    groupId?: number;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => Date, {nullable:true})
    startsAt?: Date | string;

    @Field(() => Date, {nullable:true})
    endsAt?: Date | string;

    @Field(() => EventApplicationPairUncheckedUpdateManyWithoutEventNestedInput, {nullable:true})
    applicationPairs?: EventApplicationPairUncheckedUpdateManyWithoutEventNestedInput;
}
