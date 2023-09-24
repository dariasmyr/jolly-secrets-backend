import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { EventApplicationStatus } from '../prisma/event-application-status.enum';
import { PreferenceUncheckedCreateNestedManyWithoutApplicationInput } from '../preference/preference-unchecked-create-nested-many-without-application.input';
import { EventApplicationPairUncheckedCreateNestedManyWithoutApplicationSecondInput } from '../event-application-pair/event-application-pair-unchecked-create-nested-many-without-application-second.input';

@InputType()
export class EventApplicationUncheckedCreateWithoutEventApplicationFirstPairsInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => Int, {nullable:false})
    accountId!: number;

    @Field(() => EventApplicationStatus, {nullable:false})
    status!: keyof typeof EventApplicationStatus;

    @Field(() => PreferenceUncheckedCreateNestedManyWithoutApplicationInput, {nullable:true})
    preferences?: PreferenceUncheckedCreateNestedManyWithoutApplicationInput;

    @Field(() => EventApplicationPairUncheckedCreateNestedManyWithoutApplicationSecondInput, {nullable:true})
    eventApplicationSecondPairs?: EventApplicationPairUncheckedCreateNestedManyWithoutApplicationSecondInput;
}
