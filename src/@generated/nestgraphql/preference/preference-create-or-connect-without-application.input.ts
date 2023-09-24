import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PreferenceWhereUniqueInput } from './preference-where-unique.input';
import { Type } from 'class-transformer';
import { PreferenceCreateWithoutApplicationInput } from './preference-create-without-application.input';

@InputType()
export class PreferenceCreateOrConnectWithoutApplicationInput {

    @Field(() => PreferenceWhereUniqueInput, {nullable:false})
    @Type(() => PreferenceWhereUniqueInput)
    where!: Prisma.AtLeast<PreferenceWhereUniqueInput, 'id'>;

    @Field(() => PreferenceCreateWithoutApplicationInput, {nullable:false})
    @Type(() => PreferenceCreateWithoutApplicationInput)
    create!: PreferenceCreateWithoutApplicationInput;
}
