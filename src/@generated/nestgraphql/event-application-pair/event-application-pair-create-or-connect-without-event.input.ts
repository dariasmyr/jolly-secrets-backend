import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { EventApplicationPairWhereUniqueInput } from './event-application-pair-where-unique.input';
import { Type } from 'class-transformer';
import { EventApplicationPairCreateWithoutEventInput } from './event-application-pair-create-without-event.input';

@InputType()
export class EventApplicationPairCreateOrConnectWithoutEventInput {

    @Field(() => EventApplicationPairWhereUniqueInput, {nullable:false})
    @Type(() => EventApplicationPairWhereUniqueInput)
    where!: Prisma.AtLeast<EventApplicationPairWhereUniqueInput, 'id'>;

    @Field(() => EventApplicationPairCreateWithoutEventInput, {nullable:false})
    @Type(() => EventApplicationPairCreateWithoutEventInput)
    create!: EventApplicationPairCreateWithoutEventInput;
}
