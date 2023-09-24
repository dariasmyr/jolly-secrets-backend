import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { EventApplicationPairUncheckedCreateNestedManyWithoutEventInput } from '../event-application-pair/event-application-pair-unchecked-create-nested-many-without-event.input';

@InputType()
export class EventUncheckedCreateWithoutGroupInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => String, {nullable:false})
    pictureUrl!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => Date, {nullable:false})
    startsAt!: Date | string;

    @Field(() => Date, {nullable:false})
    endsAt!: Date | string;

    @Field(() => EventApplicationPairUncheckedCreateNestedManyWithoutEventInput, {nullable:true})
    applicationPairs?: EventApplicationPairUncheckedCreateNestedManyWithoutEventInput;
}
