import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventStatus } from '../prisma/event-status.enum';

@InputType()
export class EventUpdateManyMutationInput {

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => String, {nullable:true})
    pictureUrl?: string;

    @Field(() => EventStatus, {nullable:true})
    status?: keyof typeof EventStatus;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => Date, {nullable:true})
    startsAt?: Date | string;

    @Field(() => Date, {nullable:true})
    endsAt?: Date | string;
}
