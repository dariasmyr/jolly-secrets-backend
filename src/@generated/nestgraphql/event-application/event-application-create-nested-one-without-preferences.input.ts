import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventApplicationCreateWithoutPreferencesInput } from './event-application-create-without-preferences.input';
import { Type } from 'class-transformer';
import { EventApplicationCreateOrConnectWithoutPreferencesInput } from './event-application-create-or-connect-without-preferences.input';
import { Prisma } from '@prisma/client';
import { EventApplicationWhereUniqueInput } from './event-application-where-unique.input';

@InputType()
export class EventApplicationCreateNestedOneWithoutPreferencesInput {

    @Field(() => EventApplicationCreateWithoutPreferencesInput, {nullable:true})
    @Type(() => EventApplicationCreateWithoutPreferencesInput)
    create?: EventApplicationCreateWithoutPreferencesInput;

    @Field(() => EventApplicationCreateOrConnectWithoutPreferencesInput, {nullable:true})
    @Type(() => EventApplicationCreateOrConnectWithoutPreferencesInput)
    connectOrCreate?: EventApplicationCreateOrConnectWithoutPreferencesInput;

    @Field(() => EventApplicationWhereUniqueInput, {nullable:true})
    @Type(() => EventApplicationWhereUniqueInput)
    connect?: Prisma.AtLeast<EventApplicationWhereUniqueInput, 'id'>;
}
