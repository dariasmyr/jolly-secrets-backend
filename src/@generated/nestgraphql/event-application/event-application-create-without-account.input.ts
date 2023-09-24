import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventApplicationStatus } from '../prisma/event-application-status.enum';
import { PreferenceCreateNestedManyWithoutApplicationInput } from '../preference/preference-create-nested-many-without-application.input';
import { EventApplicationPairCreateNestedManyWithoutApplicationFirstInput } from '../event-application-pair/event-application-pair-create-nested-many-without-application-first.input';
import { EventApplicationPairCreateNestedManyWithoutApplicationSecondInput } from '../event-application-pair/event-application-pair-create-nested-many-without-application-second.input';

@InputType()
export class EventApplicationCreateWithoutAccountInput {

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => EventApplicationStatus, {nullable:false})
    status!: keyof typeof EventApplicationStatus;

    @Field(() => PreferenceCreateNestedManyWithoutApplicationInput, {nullable:true})
    preferences?: PreferenceCreateNestedManyWithoutApplicationInput;

    @Field(() => EventApplicationPairCreateNestedManyWithoutApplicationFirstInput, {nullable:true})
    eventApplicationFirstPairs?: EventApplicationPairCreateNestedManyWithoutApplicationFirstInput;

    @Field(() => EventApplicationPairCreateNestedManyWithoutApplicationSecondInput, {nullable:true})
    eventApplicationSecondPairs?: EventApplicationPairCreateNestedManyWithoutApplicationSecondInput;
}
