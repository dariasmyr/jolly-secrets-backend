import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventCreateNestedOneWithoutApplicationPairsInput } from '../event/event-create-nested-one-without-application-pairs.input';
import { EventApplicationCreateNestedOneWithoutEventApplicationSecondPairsInput } from '../event-application/event-application-create-nested-one-without-event-application-second-pairs.input';

@InputType()
export class EventApplicationPairCreateWithoutApplicationFirstInput {

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => EventCreateNestedOneWithoutApplicationPairsInput, {nullable:false})
    event!: EventCreateNestedOneWithoutApplicationPairsInput;

    @Field(() => EventApplicationCreateNestedOneWithoutEventApplicationSecondPairsInput, {nullable:false})
    applicationSecond!: EventApplicationCreateNestedOneWithoutEventApplicationSecondPairsInput;
}
