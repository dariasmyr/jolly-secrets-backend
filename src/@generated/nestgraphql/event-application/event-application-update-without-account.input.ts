import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventApplicationStatus } from '../prisma/event-application-status.enum';
import { PreferenceUpdateManyWithoutApplicationNestedInput } from '../preference/preference-update-many-without-application-nested.input';
import { EventApplicationPairUpdateManyWithoutApplicationFirstNestedInput } from '../event-application-pair/event-application-pair-update-many-without-application-first-nested.input';
import { EventApplicationPairUpdateManyWithoutApplicationSecondNestedInput } from '../event-application-pair/event-application-pair-update-many-without-application-second-nested.input';

@InputType()
export class EventApplicationUpdateWithoutAccountInput {

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => EventApplicationStatus, {nullable:true})
    status?: keyof typeof EventApplicationStatus;

    @Field(() => PreferenceUpdateManyWithoutApplicationNestedInput, {nullable:true})
    preferences?: PreferenceUpdateManyWithoutApplicationNestedInput;

    @Field(() => EventApplicationPairUpdateManyWithoutApplicationFirstNestedInput, {nullable:true})
    eventApplicationFirstPairs?: EventApplicationPairUpdateManyWithoutApplicationFirstNestedInput;

    @Field(() => EventApplicationPairUpdateManyWithoutApplicationSecondNestedInput, {nullable:true})
    eventApplicationSecondPairs?: EventApplicationPairUpdateManyWithoutApplicationSecondNestedInput;
}
