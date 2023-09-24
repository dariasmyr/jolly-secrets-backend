import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { EventWhereUniqueInput } from './event-where-unique.input';
import { Type } from 'class-transformer';
import { EventCreateWithoutApplicationPairsInput } from './event-create-without-application-pairs.input';

@InputType()
export class EventCreateOrConnectWithoutApplicationPairsInput {

    @Field(() => EventWhereUniqueInput, {nullable:false})
    @Type(() => EventWhereUniqueInput)
    where!: Prisma.AtLeast<EventWhereUniqueInput, 'id' | 'groupId_name'>;

    @Field(() => EventCreateWithoutApplicationPairsInput, {nullable:false})
    @Type(() => EventCreateWithoutApplicationPairsInput)
    create!: EventCreateWithoutApplicationPairsInput;
}
