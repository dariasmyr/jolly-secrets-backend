import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PreferenceCreateWithoutEventApplicationInput } from './preference-create-without-event-application.input';
import { Type } from 'class-transformer';
import { PreferenceCreateOrConnectWithoutEventApplicationInput } from './preference-create-or-connect-without-event-application.input';
import { PreferenceUpsertWithWhereUniqueWithoutEventApplicationInput } from './preference-upsert-with-where-unique-without-event-application.input';
import { PreferenceCreateManyEventApplicationInputEnvelope } from './preference-create-many-event-application-input-envelope.input';
import { Prisma } from '@prisma/client';
import { PreferenceWhereUniqueInput } from './preference-where-unique.input';
import { PreferenceUpdateWithWhereUniqueWithoutEventApplicationInput } from './preference-update-with-where-unique-without-event-application.input';
import { PreferenceUpdateManyWithWhereWithoutEventApplicationInput } from './preference-update-many-with-where-without-event-application.input';
import { PreferenceScalarWhereInput } from './preference-scalar-where.input';

@InputType()
export class PreferenceUpdateManyWithoutEventApplicationNestedInput {

    @Field(() => [PreferenceCreateWithoutEventApplicationInput], {nullable:true})
    @Type(() => PreferenceCreateWithoutEventApplicationInput)
    create?: Array<PreferenceCreateWithoutEventApplicationInput>;

    @Field(() => [PreferenceCreateOrConnectWithoutEventApplicationInput], {nullable:true})
    @Type(() => PreferenceCreateOrConnectWithoutEventApplicationInput)
    connectOrCreate?: Array<PreferenceCreateOrConnectWithoutEventApplicationInput>;

    @Field(() => [PreferenceUpsertWithWhereUniqueWithoutEventApplicationInput], {nullable:true})
    @Type(() => PreferenceUpsertWithWhereUniqueWithoutEventApplicationInput)
    upsert?: Array<PreferenceUpsertWithWhereUniqueWithoutEventApplicationInput>;

    @Field(() => PreferenceCreateManyEventApplicationInputEnvelope, {nullable:true})
    @Type(() => PreferenceCreateManyEventApplicationInputEnvelope)
    createMany?: PreferenceCreateManyEventApplicationInputEnvelope;

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

    @Field(() => [PreferenceUpdateWithWhereUniqueWithoutEventApplicationInput], {nullable:true})
    @Type(() => PreferenceUpdateWithWhereUniqueWithoutEventApplicationInput)
    update?: Array<PreferenceUpdateWithWhereUniqueWithoutEventApplicationInput>;

    @Field(() => [PreferenceUpdateManyWithWhereWithoutEventApplicationInput], {nullable:true})
    @Type(() => PreferenceUpdateManyWithWhereWithoutEventApplicationInput)
    updateMany?: Array<PreferenceUpdateManyWithWhereWithoutEventApplicationInput>;

    @Field(() => [PreferenceScalarWhereInput], {nullable:true})
    @Type(() => PreferenceScalarWhereInput)
    deleteMany?: Array<PreferenceScalarWhereInput>;
}
