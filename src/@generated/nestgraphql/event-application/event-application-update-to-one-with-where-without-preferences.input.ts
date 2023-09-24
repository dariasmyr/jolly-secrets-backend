import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventApplicationWhereInput } from './event-application-where.input';
import { Type } from 'class-transformer';
import { EventApplicationUpdateWithoutPreferencesInput } from './event-application-update-without-preferences.input';

@InputType()
export class EventApplicationUpdateToOneWithWhereWithoutPreferencesInput {

    @Field(() => EventApplicationWhereInput, {nullable:true})
    @Type(() => EventApplicationWhereInput)
    where?: EventApplicationWhereInput;

    @Field(() => EventApplicationUpdateWithoutPreferencesInput, {nullable:false})
    @Type(() => EventApplicationUpdateWithoutPreferencesInput)
    data!: EventApplicationUpdateWithoutPreferencesInput;
}
