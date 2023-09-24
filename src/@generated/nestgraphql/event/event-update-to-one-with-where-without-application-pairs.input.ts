import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventWhereInput } from './event-where.input';
import { Type } from 'class-transformer';
import { EventUpdateWithoutApplicationPairsInput } from './event-update-without-application-pairs.input';

@InputType()
export class EventUpdateToOneWithWhereWithoutApplicationPairsInput {

    @Field(() => EventWhereInput, {nullable:true})
    @Type(() => EventWhereInput)
    where?: EventWhereInput;

    @Field(() => EventUpdateWithoutApplicationPairsInput, {nullable:false})
    @Type(() => EventUpdateWithoutApplicationPairsInput)
    data!: EventUpdateWithoutApplicationPairsInput;
}
