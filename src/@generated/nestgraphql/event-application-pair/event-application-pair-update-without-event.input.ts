import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventApplicationUpdateOneRequiredWithoutEventApplicationFirstPairsNestedInput } from '../event-application/event-application-update-one-required-without-event-application-first-pairs-nested.input';
import { EventApplicationUpdateOneRequiredWithoutEventApplicationSecondPairsNestedInput } from '../event-application/event-application-update-one-required-without-event-application-second-pairs-nested.input';

@InputType()
export class EventApplicationPairUpdateWithoutEventInput {

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => EventApplicationUpdateOneRequiredWithoutEventApplicationFirstPairsNestedInput, {nullable:true})
    applicationFirst?: EventApplicationUpdateOneRequiredWithoutEventApplicationFirstPairsNestedInput;

    @Field(() => EventApplicationUpdateOneRequiredWithoutEventApplicationSecondPairsNestedInput, {nullable:true})
    applicationSecond?: EventApplicationUpdateOneRequiredWithoutEventApplicationSecondPairsNestedInput;
}
