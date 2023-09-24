import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventApplicationUpdateWithoutEventApplicationSecondPairsInput } from './event-application-update-without-event-application-second-pairs.input';
import { Type } from 'class-transformer';
import { EventApplicationCreateWithoutEventApplicationSecondPairsInput } from './event-application-create-without-event-application-second-pairs.input';
import { EventApplicationWhereInput } from './event-application-where.input';

@InputType()
export class EventApplicationUpsertWithoutEventApplicationSecondPairsInput {

    @Field(() => EventApplicationUpdateWithoutEventApplicationSecondPairsInput, {nullable:false})
    @Type(() => EventApplicationUpdateWithoutEventApplicationSecondPairsInput)
    update!: EventApplicationUpdateWithoutEventApplicationSecondPairsInput;

    @Field(() => EventApplicationCreateWithoutEventApplicationSecondPairsInput, {nullable:false})
    @Type(() => EventApplicationCreateWithoutEventApplicationSecondPairsInput)
    create!: EventApplicationCreateWithoutEventApplicationSecondPairsInput;

    @Field(() => EventApplicationWhereInput, {nullable:true})
    @Type(() => EventApplicationWhereInput)
    where?: EventApplicationWhereInput;
}
