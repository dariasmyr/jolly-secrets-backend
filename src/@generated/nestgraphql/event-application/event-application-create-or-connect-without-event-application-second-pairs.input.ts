import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { EventApplicationWhereUniqueInput } from './event-application-where-unique.input';
import { Type } from 'class-transformer';
import { EventApplicationCreateWithoutEventApplicationSecondPairsInput } from './event-application-create-without-event-application-second-pairs.input';

@InputType()
export class EventApplicationCreateOrConnectWithoutEventApplicationSecondPairsInput {

    @Field(() => EventApplicationWhereUniqueInput, {nullable:false})
    @Type(() => EventApplicationWhereUniqueInput)
    where!: Prisma.AtLeast<EventApplicationWhereUniqueInput, 'id'>;

    @Field(() => EventApplicationCreateWithoutEventApplicationSecondPairsInput, {nullable:false})
    @Type(() => EventApplicationCreateWithoutEventApplicationSecondPairsInput)
    create!: EventApplicationCreateWithoutEventApplicationSecondPairsInput;
}
