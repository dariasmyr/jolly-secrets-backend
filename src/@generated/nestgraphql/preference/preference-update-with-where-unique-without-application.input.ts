import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PreferenceWhereUniqueInput } from './preference-where-unique.input';
import { Type } from 'class-transformer';
import { PreferenceUpdateWithoutApplicationInput } from './preference-update-without-application.input';

@InputType()
export class PreferenceUpdateWithWhereUniqueWithoutApplicationInput {

    @Field(() => PreferenceWhereUniqueInput, {nullable:false})
    @Type(() => PreferenceWhereUniqueInput)
    where!: Prisma.AtLeast<PreferenceWhereUniqueInput, 'id'>;

    @Field(() => PreferenceUpdateWithoutApplicationInput, {nullable:false})
    @Type(() => PreferenceUpdateWithoutApplicationInput)
    data!: PreferenceUpdateWithoutApplicationInput;
}
