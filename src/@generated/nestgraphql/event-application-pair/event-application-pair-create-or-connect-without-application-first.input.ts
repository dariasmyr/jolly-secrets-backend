import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { EventApplicationPairWhereUniqueInput } from './event-application-pair-where-unique.input';
import { Type } from 'class-transformer';
import { EventApplicationPairCreateWithoutApplicationFirstInput } from './event-application-pair-create-without-application-first.input';

@InputType()
export class EventApplicationPairCreateOrConnectWithoutApplicationFirstInput {

    @Field(() => EventApplicationPairWhereUniqueInput, {nullable:false})
    @Type(() => EventApplicationPairWhereUniqueInput)
    where!: Prisma.AtLeast<EventApplicationPairWhereUniqueInput, 'id'>;

    @Field(() => EventApplicationPairCreateWithoutApplicationFirstInput, {nullable:false})
    @Type(() => EventApplicationPairCreateWithoutApplicationFirstInput)
    create!: EventApplicationPairCreateWithoutApplicationFirstInput;
}
