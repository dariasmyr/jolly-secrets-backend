import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventCreateNestedOneWithoutApplicationPairsInput } from '../event/event-create-nested-one-without-application-pairs.input';
import { EventApplicationCreateNestedOneWithoutEventApplicationFirstPairsInput } from '../event-application/event-application-create-nested-one-without-event-application-first-pairs.input';
import { EventApplicationCreateNestedOneWithoutEventApplicationSecondPairsInput } from '../event-application/event-application-create-nested-one-without-event-application-second-pairs.input';

@InputType()
export class EventApplicationPairCreateWithoutChatInput {

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => EventCreateNestedOneWithoutApplicationPairsInput, {nullable:false})
    event!: EventCreateNestedOneWithoutApplicationPairsInput;

    @Field(() => EventApplicationCreateNestedOneWithoutEventApplicationFirstPairsInput, {nullable:false})
    applicationFirst!: EventApplicationCreateNestedOneWithoutEventApplicationFirstPairsInput;

    @Field(() => EventApplicationCreateNestedOneWithoutEventApplicationSecondPairsInput, {nullable:true})
    applicationSecond?: EventApplicationCreateNestedOneWithoutEventApplicationSecondPairsInput;
}
