import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { EventApplicationStatus } from '../prisma/event-application-status.enum';
import { PreferenceUncheckedUpdateManyWithoutApplicationNestedInput } from '../preference/preference-unchecked-update-many-without-application-nested.input';
import { EventApplicationPairUncheckedUpdateManyWithoutApplicationFirstNestedInput } from '../event-application-pair/event-application-pair-unchecked-update-many-without-application-first-nested.input';

@InputType()
export class EventApplicationUncheckedUpdateWithoutEventApplicationSecondPairsInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => Int, {nullable:true})
    accountId?: number;

    @Field(() => EventApplicationStatus, {nullable:true})
    status?: keyof typeof EventApplicationStatus;

    @Field(() => PreferenceUncheckedUpdateManyWithoutApplicationNestedInput, {nullable:true})
    preferences?: PreferenceUncheckedUpdateManyWithoutApplicationNestedInput;

    @Field(() => EventApplicationPairUncheckedUpdateManyWithoutApplicationFirstNestedInput, {nullable:true})
    eventApplicationFirstPairs?: EventApplicationPairUncheckedUpdateManyWithoutApplicationFirstNestedInput;
}
