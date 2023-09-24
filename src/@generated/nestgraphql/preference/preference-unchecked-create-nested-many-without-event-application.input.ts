import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PreferenceCreateWithoutEventApplicationInput } from './preference-create-without-event-application.input';
import { Type } from 'class-transformer';
import { PreferenceCreateOrConnectWithoutEventApplicationInput } from './preference-create-or-connect-without-event-application.input';
import { PreferenceCreateManyEventApplicationInputEnvelope } from './preference-create-many-event-application-input-envelope.input';
import { Prisma } from '@prisma/client';
import { PreferenceWhereUniqueInput } from './preference-where-unique.input';

@InputType()
export class PreferenceUncheckedCreateNestedManyWithoutEventApplicationInput {

    @Field(() => [PreferenceCreateWithoutEventApplicationInput], {nullable:true})
    @Type(() => PreferenceCreateWithoutEventApplicationInput)
    create?: Array<PreferenceCreateWithoutEventApplicationInput>;

    @Field(() => [PreferenceCreateOrConnectWithoutEventApplicationInput], {nullable:true})
    @Type(() => PreferenceCreateOrConnectWithoutEventApplicationInput)
    connectOrCreate?: Array<PreferenceCreateOrConnectWithoutEventApplicationInput>;

    @Field(() => PreferenceCreateManyEventApplicationInputEnvelope, {nullable:true})
    @Type(() => PreferenceCreateManyEventApplicationInputEnvelope)
    createMany?: PreferenceCreateManyEventApplicationInputEnvelope;

    @Field(() => [PreferenceWhereUniqueInput], {nullable:true})
    @Type(() => PreferenceWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<PreferenceWhereUniqueInput, 'id'>>;
}
