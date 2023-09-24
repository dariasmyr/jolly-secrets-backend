import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventApplicationCreateNestedOneWithoutEventApplicationFirstPairsInput } from '../event-application/event-application-create-nested-one-without-event-application-first-pairs.input';
import { EventApplicationCreateNestedOneWithoutEventApplicationSecondPairsInput } from '../event-application/event-application-create-nested-one-without-event-application-second-pairs.input';
import { ChatCreateNestedOneWithoutEventApplicationPairInput } from '../chat/chat-create-nested-one-without-event-application-pair.input';

@InputType()
export class EventApplicationPairCreateWithoutEventInput {

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => EventApplicationCreateNestedOneWithoutEventApplicationFirstPairsInput, {nullable:false})
    applicationFirst!: EventApplicationCreateNestedOneWithoutEventApplicationFirstPairsInput;

    @Field(() => EventApplicationCreateNestedOneWithoutEventApplicationSecondPairsInput, {nullable:false})
    applicationSecond!: EventApplicationCreateNestedOneWithoutEventApplicationSecondPairsInput;

    @Field(() => ChatCreateNestedOneWithoutEventApplicationPairInput, {nullable:false})
    chat!: ChatCreateNestedOneWithoutEventApplicationPairInput;
}
