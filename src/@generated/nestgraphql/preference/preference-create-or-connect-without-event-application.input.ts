import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PreferenceWhereUniqueInput } from './preference-where-unique.input';
import { Type } from 'class-transformer';
import { PreferenceCreateWithoutEventApplicationInput } from './preference-create-without-event-application.input';

@InputType()
export class PreferenceCreateOrConnectWithoutEventApplicationInput {

    @Field(() => PreferenceWhereUniqueInput, {nullable:false})
    @Type(() => PreferenceWhereUniqueInput)
    where!: Prisma.AtLeast<PreferenceWhereUniqueInput, 'id'>;

    @Field(() => PreferenceCreateWithoutEventApplicationInput, {nullable:false})
    @Type(() => PreferenceCreateWithoutEventApplicationInput)
    create!: PreferenceCreateWithoutEventApplicationInput;
}
