import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { EventApplicationWhereUniqueInput } from './event-application-where-unique.input';
import { Type } from 'class-transformer';
import { EventApplicationCreateWithoutEventApplicationFirstPairsInput } from './event-application-create-without-event-application-first-pairs.input';

@InputType()
export class EventApplicationCreateOrConnectWithoutEventApplicationFirstPairsInput {

    @Field(() => EventApplicationWhereUniqueInput, {nullable:false})
    @Type(() => EventApplicationWhereUniqueInput)
    where!: Prisma.AtLeast<EventApplicationWhereUniqueInput, 'id'>;

    @Field(() => EventApplicationCreateWithoutEventApplicationFirstPairsInput, {nullable:false})
    @Type(() => EventApplicationCreateWithoutEventApplicationFirstPairsInput)
    create!: EventApplicationCreateWithoutEventApplicationFirstPairsInput;
}
