import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PreferenceWhereUniqueInput } from './preference-where-unique.input';
import { Type } from 'class-transformer';
import { PreferenceUpdateWithoutEventApplicationInput } from './preference-update-without-event-application.input';

@InputType()
export class PreferenceUpdateWithWhereUniqueWithoutEventApplicationInput {

    @Field(() => PreferenceWhereUniqueInput, {nullable:false})
    @Type(() => PreferenceWhereUniqueInput)
    where!: Prisma.AtLeast<PreferenceWhereUniqueInput, 'id'>;

    @Field(() => PreferenceUpdateWithoutEventApplicationInput, {nullable:false})
    @Type(() => PreferenceUpdateWithoutEventApplicationInput)
    data!: PreferenceUpdateWithoutEventApplicationInput;
}
