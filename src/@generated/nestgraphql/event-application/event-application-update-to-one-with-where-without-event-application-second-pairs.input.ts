import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventApplicationWhereInput } from './event-application-where.input';
import { Type } from 'class-transformer';
import { EventApplicationUpdateWithoutEventApplicationSecondPairsInput } from './event-application-update-without-event-application-second-pairs.input';

@InputType()
export class EventApplicationUpdateToOneWithWhereWithoutEventApplicationSecondPairsInput {

    @Field(() => EventApplicationWhereInput, {nullable:true})
    @Type(() => EventApplicationWhereInput)
    where?: EventApplicationWhereInput;

    @Field(() => EventApplicationUpdateWithoutEventApplicationSecondPairsInput, {nullable:false})
    @Type(() => EventApplicationUpdateWithoutEventApplicationSecondPairsInput)
    data!: EventApplicationUpdateWithoutEventApplicationSecondPairsInput;
}
