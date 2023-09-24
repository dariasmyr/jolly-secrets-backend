import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PreferenceCreateWithoutApplicationInput } from './preference-create-without-application.input';
import { Type } from 'class-transformer';
import { PreferenceCreateOrConnectWithoutApplicationInput } from './preference-create-or-connect-without-application.input';
import { PreferenceCreateManyApplicationInputEnvelope } from './preference-create-many-application-input-envelope.input';
import { Prisma } from '@prisma/client';
import { PreferenceWhereUniqueInput } from './preference-where-unique.input';

@InputType()
export class PreferenceUncheckedCreateNestedManyWithoutApplicationInput {

    @Field(() => [PreferenceCreateWithoutApplicationInput], {nullable:true})
    @Type(() => PreferenceCreateWithoutApplicationInput)
    create?: Array<PreferenceCreateWithoutApplicationInput>;

    @Field(() => [PreferenceCreateOrConnectWithoutApplicationInput], {nullable:true})
    @Type(() => PreferenceCreateOrConnectWithoutApplicationInput)
    connectOrCreate?: Array<PreferenceCreateOrConnectWithoutApplicationInput>;

    @Field(() => PreferenceCreateManyApplicationInputEnvelope, {nullable:true})
    @Type(() => PreferenceCreateManyApplicationInputEnvelope)
    createMany?: PreferenceCreateManyApplicationInputEnvelope;

    @Field(() => [PreferenceWhereUniqueInput], {nullable:true})
    @Type(() => PreferenceWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<PreferenceWhereUniqueInput, 'id'>>;
}
