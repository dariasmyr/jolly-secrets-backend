import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PreferenceCreateWithoutApplicationInput } from './preference-create-without-application.input';
import { Type } from 'class-transformer';
import { PreferenceCreateOrConnectWithoutApplicationInput } from './preference-create-or-connect-without-application.input';
import { PreferenceUpsertWithWhereUniqueWithoutApplicationInput } from './preference-upsert-with-where-unique-without-application.input';
import { PreferenceCreateManyApplicationInputEnvelope } from './preference-create-many-application-input-envelope.input';
import { Prisma } from '@prisma/client';
import { PreferenceWhereUniqueInput } from './preference-where-unique.input';
import { PreferenceUpdateWithWhereUniqueWithoutApplicationInput } from './preference-update-with-where-unique-without-application.input';
import { PreferenceUpdateManyWithWhereWithoutApplicationInput } from './preference-update-many-with-where-without-application.input';
import { PreferenceScalarWhereInput } from './preference-scalar-where.input';

@InputType()
export class PreferenceUpdateManyWithoutApplicationNestedInput {

    @Field(() => [PreferenceCreateWithoutApplicationInput], {nullable:true})
    @Type(() => PreferenceCreateWithoutApplicationInput)
    create?: Array<PreferenceCreateWithoutApplicationInput>;

    @Field(() => [PreferenceCreateOrConnectWithoutApplicationInput], {nullable:true})
    @Type(() => PreferenceCreateOrConnectWithoutApplicationInput)
    connectOrCreate?: Array<PreferenceCreateOrConnectWithoutApplicationInput>;

    @Field(() => [PreferenceUpsertWithWhereUniqueWithoutApplicationInput], {nullable:true})
    @Type(() => PreferenceUpsertWithWhereUniqueWithoutApplicationInput)
    upsert?: Array<PreferenceUpsertWithWhereUniqueWithoutApplicationInput>;

    @Field(() => PreferenceCreateManyApplicationInputEnvelope, {nullable:true})
    @Type(() => PreferenceCreateManyApplicationInputEnvelope)
    createMany?: PreferenceCreateManyApplicationInputEnvelope;

    @Field(() => [PreferenceWhereUniqueInput], {nullable:true})
    @Type(() => PreferenceWhereUniqueInput)
    set?: Array<Prisma.AtLeast<PreferenceWhereUniqueInput, 'id'>>;

    @Field(() => [PreferenceWhereUniqueInput], {nullable:true})
    @Type(() => PreferenceWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<PreferenceWhereUniqueInput, 'id'>>;

    @Field(() => [PreferenceWhereUniqueInput], {nullable:true})
    @Type(() => PreferenceWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<PreferenceWhereUniqueInput, 'id'>>;

    @Field(() => [PreferenceWhereUniqueInput], {nullable:true})
    @Type(() => PreferenceWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<PreferenceWhereUniqueInput, 'id'>>;

    @Field(() => [PreferenceUpdateWithWhereUniqueWithoutApplicationInput], {nullable:true})
    @Type(() => PreferenceUpdateWithWhereUniqueWithoutApplicationInput)
    update?: Array<PreferenceUpdateWithWhereUniqueWithoutApplicationInput>;

    @Field(() => [PreferenceUpdateManyWithWhereWithoutApplicationInput], {nullable:true})
    @Type(() => PreferenceUpdateManyWithWhereWithoutApplicationInput)
    updateMany?: Array<PreferenceUpdateManyWithWhereWithoutApplicationInput>;

    @Field(() => [PreferenceScalarWhereInput], {nullable:true})
    @Type(() => PreferenceScalarWhereInput)
    deleteMany?: Array<PreferenceScalarWhereInput>;
}
