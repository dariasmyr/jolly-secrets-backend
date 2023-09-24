import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventApplicationPairScalarWhereInput } from './event-application-pair-scalar-where.input';
import { Type } from 'class-transformer';
import { EventApplicationPairUpdateManyMutationInput } from './event-application-pair-update-many-mutation.input';

@InputType()
export class EventApplicationPairUpdateManyWithWhereWithoutEventInput {

    @Field(() => EventApplicationPairScalarWhereInput, {nullable:false})
    @Type(() => EventApplicationPairScalarWhereInput)
    where!: EventApplicationPairScalarWhereInput;

    @Field(() => EventApplicationPairUpdateManyMutationInput, {nullable:false})
    @Type(() => EventApplicationPairUpdateManyMutationInput)
    data!: EventApplicationPairUpdateManyMutationInput;
}
