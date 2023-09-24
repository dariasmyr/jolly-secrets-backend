import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventApplicationCreateWithoutPreferencesInput } from './event-application-create-without-preferences.input';
import { Type } from 'class-transformer';
import { EventApplicationCreateOrConnectWithoutPreferencesInput } from './event-application-create-or-connect-without-preferences.input';
import { EventApplicationUpsertWithoutPreferencesInput } from './event-application-upsert-without-preferences.input';
import { EventApplicationWhereInput } from './event-application-where.input';
import { Prisma } from '@prisma/client';
import { EventApplicationWhereUniqueInput } from './event-application-where-unique.input';
import { EventApplicationUpdateToOneWithWhereWithoutPreferencesInput } from './event-application-update-to-one-with-where-without-preferences.input';

@InputType()
export class EventApplicationUpdateOneWithoutPreferencesNestedInput {

    @Field(() => EventApplicationCreateWithoutPreferencesInput, {nullable:true})
    @Type(() => EventApplicationCreateWithoutPreferencesInput)
    create?: EventApplicationCreateWithoutPreferencesInput;

    @Field(() => EventApplicationCreateOrConnectWithoutPreferencesInput, {nullable:true})
    @Type(() => EventApplicationCreateOrConnectWithoutPreferencesInput)
    connectOrCreate?: EventApplicationCreateOrConnectWithoutPreferencesInput;

    @Field(() => EventApplicationUpsertWithoutPreferencesInput, {nullable:true})
    @Type(() => EventApplicationUpsertWithoutPreferencesInput)
    upsert?: EventApplicationUpsertWithoutPreferencesInput;

    @Field(() => EventApplicationWhereInput, {nullable:true})
    @Type(() => EventApplicationWhereInput)
    disconnect?: EventApplicationWhereInput;

    @Field(() => EventApplicationWhereInput, {nullable:true})
    @Type(() => EventApplicationWhereInput)
    delete?: EventApplicationWhereInput;

    @Field(() => EventApplicationWhereUniqueInput, {nullable:true})
    @Type(() => EventApplicationWhereUniqueInput)
    connect?: Prisma.AtLeast<EventApplicationWhereUniqueInput, 'id'>;

    @Field(() => EventApplicationUpdateToOneWithWhereWithoutPreferencesInput, {nullable:true})
    @Type(() => EventApplicationUpdateToOneWithWhereWithoutPreferencesInput)
    update?: EventApplicationUpdateToOneWithWhereWithoutPreferencesInput;
}
