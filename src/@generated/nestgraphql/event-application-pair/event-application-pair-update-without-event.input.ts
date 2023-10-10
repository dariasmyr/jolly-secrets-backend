import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventApplicationUpdateOneRequiredWithoutEventApplicationFirstPairsNestedInput } from '../event-application/event-application-update-one-required-without-event-application-first-pairs-nested.input';
import { EventApplicationUpdateOneWithoutEventApplicationSecondPairsNestedInput } from '../event-application/event-application-update-one-without-event-application-second-pairs-nested.input';
import { ChatUpdateOneWithoutEventApplicationPairNestedInput } from '../chat/chat-update-one-without-event-application-pair-nested.input';

@InputType()
export class EventApplicationPairUpdateWithoutEventInput {

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => EventApplicationUpdateOneRequiredWithoutEventApplicationFirstPairsNestedInput, {nullable:true})
    applicationFirst?: EventApplicationUpdateOneRequiredWithoutEventApplicationFirstPairsNestedInput;

    @Field(() => EventApplicationUpdateOneWithoutEventApplicationSecondPairsNestedInput, {nullable:true})
    applicationSecond?: EventApplicationUpdateOneWithoutEventApplicationSecondPairsNestedInput;

    @Field(() => ChatUpdateOneWithoutEventApplicationPairNestedInput, {nullable:true})
    chat?: ChatUpdateOneWithoutEventApplicationPairNestedInput;
}
