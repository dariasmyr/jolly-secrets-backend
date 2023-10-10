import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventCreateNestedOneWithoutApplicationPairsInput } from '../event/event-create-nested-one-without-application-pairs.input';
import { EventApplicationCreateNestedOneWithoutEventApplicationFirstPairsInput } from '../event-application/event-application-create-nested-one-without-event-application-first-pairs.input';
import { EventApplicationCreateNestedOneWithoutEventApplicationSecondPairsInput } from '../event-application/event-application-create-nested-one-without-event-application-second-pairs.input';
import { ChatCreateNestedOneWithoutEventApplicationPairInput } from '../chat/chat-create-nested-one-without-event-application-pair.input';

@InputType()
export class EventApplicationPairCreateInput {

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

    @Field(() => ChatCreateNestedOneWithoutEventApplicationPairInput, {nullable:true})
    chat?: ChatCreateNestedOneWithoutEventApplicationPairInput;
}
