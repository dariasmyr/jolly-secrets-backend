import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventUpdateWithoutApplicationPairsInput } from './event-update-without-application-pairs.input';
import { Type } from 'class-transformer';
import { EventCreateWithoutApplicationPairsInput } from './event-create-without-application-pairs.input';
import { EventWhereInput } from './event-where.input';

@InputType()
export class EventUpsertWithoutApplicationPairsInput {

    @Field(() => EventUpdateWithoutApplicationPairsInput, {nullable:false})
    @Type(() => EventUpdateWithoutApplicationPairsInput)
    update!: EventUpdateWithoutApplicationPairsInput;

    @Field(() => EventCreateWithoutApplicationPairsInput, {nullable:false})
    @Type(() => EventCreateWithoutApplicationPairsInput)
    create!: EventCreateWithoutApplicationPairsInput;

    @Field(() => EventWhereInput, {nullable:true})
    @Type(() => EventWhereInput)
    where?: EventWhereInput;
}
