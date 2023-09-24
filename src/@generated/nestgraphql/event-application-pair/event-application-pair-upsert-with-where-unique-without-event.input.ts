import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { EventApplicationPairWhereUniqueInput } from './event-application-pair-where-unique.input';
import { Type } from 'class-transformer';
import { EventApplicationPairUpdateWithoutEventInput } from './event-application-pair-update-without-event.input';
import { EventApplicationPairCreateWithoutEventInput } from './event-application-pair-create-without-event.input';

@InputType()
export class EventApplicationPairUpsertWithWhereUniqueWithoutEventInput {

    @Field(() => EventApplicationPairWhereUniqueInput, {nullable:false})
    @Type(() => EventApplicationPairWhereUniqueInput)
    where!: Prisma.AtLeast<EventApplicationPairWhereUniqueInput, 'id'>;

    @Field(() => EventApplicationPairUpdateWithoutEventInput, {nullable:false})
    @Type(() => EventApplicationPairUpdateWithoutEventInput)
    update!: EventApplicationPairUpdateWithoutEventInput;

    @Field(() => EventApplicationPairCreateWithoutEventInput, {nullable:false})
    @Type(() => EventApplicationPairCreateWithoutEventInput)
    create!: EventApplicationPairCreateWithoutEventInput;
}
