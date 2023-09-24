import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PreferenceWhereUniqueInput } from './preference-where-unique.input';
import { Type } from 'class-transformer';
import { PreferenceUpdateWithoutApplicationInput } from './preference-update-without-application.input';
import { PreferenceCreateWithoutApplicationInput } from './preference-create-without-application.input';

@InputType()
export class PreferenceUpsertWithWhereUniqueWithoutApplicationInput {

    @Field(() => PreferenceWhereUniqueInput, {nullable:false})
    @Type(() => PreferenceWhereUniqueInput)
    where!: Prisma.AtLeast<PreferenceWhereUniqueInput, 'id'>;

    @Field(() => PreferenceUpdateWithoutApplicationInput, {nullable:false})
    @Type(() => PreferenceUpdateWithoutApplicationInput)
    update!: PreferenceUpdateWithoutApplicationInput;

    @Field(() => PreferenceCreateWithoutApplicationInput, {nullable:false})
    @Type(() => PreferenceCreateWithoutApplicationInput)
    create!: PreferenceCreateWithoutApplicationInput;
}
