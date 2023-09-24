import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ExternalProfileCreateWithoutAccountInput } from './external-profile-create-without-account.input';
import { Type } from 'class-transformer';
import { ExternalProfileCreateOrConnectWithoutAccountInput } from './external-profile-create-or-connect-without-account.input';
import { ExternalProfileUpsertWithWhereUniqueWithoutAccountInput } from './external-profile-upsert-with-where-unique-without-account.input';
import { ExternalProfileCreateManyAccountInputEnvelope } from './external-profile-create-many-account-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ExternalProfileWhereUniqueInput } from './external-profile-where-unique.input';
import { ExternalProfileUpdateWithWhereUniqueWithoutAccountInput } from './external-profile-update-with-where-unique-without-account.input';
import { ExternalProfileUpdateManyWithWhereWithoutAccountInput } from './external-profile-update-many-with-where-without-account.input';
import { ExternalProfileScalarWhereInput } from './external-profile-scalar-where.input';

@InputType()
export class ExternalProfileUncheckedUpdateManyWithoutAccountNestedInput {

    @Field(() => [ExternalProfileCreateWithoutAccountInput], {nullable:true})
    @Type(() => ExternalProfileCreateWithoutAccountInput)
    create?: Array<ExternalProfileCreateWithoutAccountInput>;

    @Field(() => [ExternalProfileCreateOrConnectWithoutAccountInput], {nullable:true})
    @Type(() => ExternalProfileCreateOrConnectWithoutAccountInput)
    connectOrCreate?: Array<ExternalProfileCreateOrConnectWithoutAccountInput>;

    @Field(() => [ExternalProfileUpsertWithWhereUniqueWithoutAccountInput], {nullable:true})
    @Type(() => ExternalProfileUpsertWithWhereUniqueWithoutAccountInput)
    upsert?: Array<ExternalProfileUpsertWithWhereUniqueWithoutAccountInput>;

    @Field(() => ExternalProfileCreateManyAccountInputEnvelope, {nullable:true})
    @Type(() => ExternalProfileCreateManyAccountInputEnvelope)
    createMany?: ExternalProfileCreateManyAccountInputEnvelope;

    @Field(() => [ExternalProfileWhereUniqueInput], {nullable:true})
    @Type(() => ExternalProfileWhereUniqueInput)
    set?: Array<Prisma.AtLeast<ExternalProfileWhereUniqueInput, 'id' | 'provider_externalId'>>;

    @Field(() => [ExternalProfileWhereUniqueInput], {nullable:true})
    @Type(() => ExternalProfileWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<ExternalProfileWhereUniqueInput, 'id' | 'provider_externalId'>>;

    @Field(() => [ExternalProfileWhereUniqueInput], {nullable:true})
    @Type(() => ExternalProfileWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<ExternalProfileWhereUniqueInput, 'id' | 'provider_externalId'>>;

    @Field(() => [ExternalProfileWhereUniqueInput], {nullable:true})
    @Type(() => ExternalProfileWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ExternalProfileWhereUniqueInput, 'id' | 'provider_externalId'>>;

    @Field(() => [ExternalProfileUpdateWithWhereUniqueWithoutAccountInput], {nullable:true})
    @Type(() => ExternalProfileUpdateWithWhereUniqueWithoutAccountInput)
    update?: Array<ExternalProfileUpdateWithWhereUniqueWithoutAccountInput>;

    @Field(() => [ExternalProfileUpdateManyWithWhereWithoutAccountInput], {nullable:true})
    @Type(() => ExternalProfileUpdateManyWithWhereWithoutAccountInput)
    updateMany?: Array<ExternalProfileUpdateManyWithWhereWithoutAccountInput>;

    @Field(() => [ExternalProfileScalarWhereInput], {nullable:true})
    @Type(() => ExternalProfileScalarWhereInput)
    deleteMany?: Array<ExternalProfileScalarWhereInput>;
}
