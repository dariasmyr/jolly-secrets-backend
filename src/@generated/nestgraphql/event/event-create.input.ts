import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GroupCreateNestedOneWithoutEventsInput } from '../group/group-create-nested-one-without-events.input';
import { EventApplicationPairCreateNestedManyWithoutEventInput } from '../event-application-pair/event-application-pair-create-nested-many-without-event.input';

@InputType()
export class EventCreateInput {

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => String, {nullable:false})
    pictureUrl!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => Date, {nullable:false})
    startsAt!: Date | string;

    @Field(() => Date, {nullable:false})
    endsAt!: Date | string;

    @Field(() => GroupCreateNestedOneWithoutEventsInput, {nullable:false})
    group!: GroupCreateNestedOneWithoutEventsInput;

    @Field(() => EventApplicationPairCreateNestedManyWithoutEventInput, {nullable:true})
    applicationPairs?: EventApplicationPairCreateNestedManyWithoutEventInput;
}
