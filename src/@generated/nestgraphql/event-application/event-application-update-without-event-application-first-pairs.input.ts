import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventApplicationStatus } from '../prisma/event-application-status.enum';
import { AccountUpdateOneRequiredWithoutEventApplicationsNestedInput } from '../account/account-update-one-required-without-event-applications-nested.input';
import { PreferenceUpdateManyWithoutApplicationNestedInput } from '../preference/preference-update-many-without-application-nested.input';
import { EventApplicationPairUpdateManyWithoutApplicationSecondNestedInput } from '../event-application-pair/event-application-pair-update-many-without-application-second-nested.input';

@InputType()
export class EventApplicationUpdateWithoutEventApplicationFirstPairsInput {

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => EventApplicationStatus, {nullable:true})
    status?: keyof typeof EventApplicationStatus;

    @Field(() => AccountUpdateOneRequiredWithoutEventApplicationsNestedInput, {nullable:true})
    account?: AccountUpdateOneRequiredWithoutEventApplicationsNestedInput;

    @Field(() => PreferenceUpdateManyWithoutApplicationNestedInput, {nullable:true})
    preferences?: PreferenceUpdateManyWithoutApplicationNestedInput;

    @Field(() => EventApplicationPairUpdateManyWithoutApplicationSecondNestedInput, {nullable:true})
    eventApplicationSecondPairs?: EventApplicationPairUpdateManyWithoutApplicationSecondNestedInput;
}
