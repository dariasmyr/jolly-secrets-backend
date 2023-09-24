import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventApplicationUpdateWithoutEventApplicationFirstPairsInput } from './event-application-update-without-event-application-first-pairs.input';
import { Type } from 'class-transformer';
import { EventApplicationCreateWithoutEventApplicationFirstPairsInput } from './event-application-create-without-event-application-first-pairs.input';
import { EventApplicationWhereInput } from './event-application-where.input';

@InputType()
export class EventApplicationUpsertWithoutEventApplicationFirstPairsInput {

    @Field(() => EventApplicationUpdateWithoutEventApplicationFirstPairsInput, {nullable:false})
    @Type(() => EventApplicationUpdateWithoutEventApplicationFirstPairsInput)
    update!: EventApplicationUpdateWithoutEventApplicationFirstPairsInput;

    @Field(() => EventApplicationCreateWithoutEventApplicationFirstPairsInput, {nullable:false})
    @Type(() => EventApplicationCreateWithoutEventApplicationFirstPairsInput)
    create!: EventApplicationCreateWithoutEventApplicationFirstPairsInput;

    @Field(() => EventApplicationWhereInput, {nullable:true})
    @Type(() => EventApplicationWhereInput)
    where?: EventApplicationWhereInput;
}
