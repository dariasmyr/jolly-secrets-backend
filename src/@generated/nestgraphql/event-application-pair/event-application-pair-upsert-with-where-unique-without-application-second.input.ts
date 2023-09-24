import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { EventApplicationPairWhereUniqueInput } from './event-application-pair-where-unique.input';
import { Type } from 'class-transformer';
import { EventApplicationPairUpdateWithoutApplicationSecondInput } from './event-application-pair-update-without-application-second.input';
import { EventApplicationPairCreateWithoutApplicationSecondInput } from './event-application-pair-create-without-application-second.input';

@InputType()
export class EventApplicationPairUpsertWithWhereUniqueWithoutApplicationSecondInput {

    @Field(() => EventApplicationPairWhereUniqueInput, {nullable:false})
    @Type(() => EventApplicationPairWhereUniqueInput)
    where!: Prisma.AtLeast<EventApplicationPairWhereUniqueInput, 'id'>;

    @Field(() => EventApplicationPairUpdateWithoutApplicationSecondInput, {nullable:false})
    @Type(() => EventApplicationPairUpdateWithoutApplicationSecondInput)
    update!: EventApplicationPairUpdateWithoutApplicationSecondInput;

    @Field(() => EventApplicationPairCreateWithoutApplicationSecondInput, {nullable:false})
    @Type(() => EventApplicationPairCreateWithoutApplicationSecondInput)
    create!: EventApplicationPairCreateWithoutApplicationSecondInput;
}
