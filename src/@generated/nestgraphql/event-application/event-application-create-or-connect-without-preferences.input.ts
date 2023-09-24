import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { EventApplicationWhereUniqueInput } from './event-application-where-unique.input';
import { Type } from 'class-transformer';
import { EventApplicationCreateWithoutPreferencesInput } from './event-application-create-without-preferences.input';

@InputType()
export class EventApplicationCreateOrConnectWithoutPreferencesInput {

    @Field(() => EventApplicationWhereUniqueInput, {nullable:false})
    @Type(() => EventApplicationWhereUniqueInput)
    where!: Prisma.AtLeast<EventApplicationWhereUniqueInput, 'id'>;

    @Field(() => EventApplicationCreateWithoutPreferencesInput, {nullable:false})
    @Type(() => EventApplicationCreateWithoutPreferencesInput)
    create!: EventApplicationCreateWithoutPreferencesInput;
}
