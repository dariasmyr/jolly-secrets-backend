import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventApplicationScalarWhereInput } from './event-application-scalar-where.input';
import { Type } from 'class-transformer';
import { EventApplicationUpdateManyMutationInput } from './event-application-update-many-mutation.input';

@InputType()
export class EventApplicationUpdateManyWithWhereWithoutAccountInput {

    @Field(() => EventApplicationScalarWhereInput, {nullable:false})
    @Type(() => EventApplicationScalarWhereInput)
    where!: EventApplicationScalarWhereInput;

    @Field(() => EventApplicationUpdateManyMutationInput, {nullable:false})
    @Type(() => EventApplicationUpdateManyMutationInput)
    data!: EventApplicationUpdateManyMutationInput;
}
