import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventApplicationWhereInput } from './event-application-where.input';
import { Type } from 'class-transformer';
import { EventApplicationUpdateWithoutEventApplicationFirstPairsInput } from './event-application-update-without-event-application-first-pairs.input';

@InputType()
export class EventApplicationUpdateToOneWithWhereWithoutEventApplicationFirstPairsInput {

    @Field(() => EventApplicationWhereInput, {nullable:true})
    @Type(() => EventApplicationWhereInput)
    where?: EventApplicationWhereInput;

    @Field(() => EventApplicationUpdateWithoutEventApplicationFirstPairsInput, {nullable:false})
    @Type(() => EventApplicationUpdateWithoutEventApplicationFirstPairsInput)
    data!: EventApplicationUpdateWithoutEventApplicationFirstPairsInput;
}
