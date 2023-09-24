import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventApplicationUpdateWithoutPreferencesInput } from './event-application-update-without-preferences.input';
import { Type } from 'class-transformer';
import { EventApplicationCreateWithoutPreferencesInput } from './event-application-create-without-preferences.input';
import { EventApplicationWhereInput } from './event-application-where.input';

@InputType()
export class EventApplicationUpsertWithoutPreferencesInput {

    @Field(() => EventApplicationUpdateWithoutPreferencesInput, {nullable:false})
    @Type(() => EventApplicationUpdateWithoutPreferencesInput)
    update!: EventApplicationUpdateWithoutPreferencesInput;

    @Field(() => EventApplicationCreateWithoutPreferencesInput, {nullable:false})
    @Type(() => EventApplicationCreateWithoutPreferencesInput)
    create!: EventApplicationCreateWithoutPreferencesInput;

    @Field(() => EventApplicationWhereInput, {nullable:true})
    @Type(() => EventApplicationWhereInput)
    where?: EventApplicationWhereInput;
}
