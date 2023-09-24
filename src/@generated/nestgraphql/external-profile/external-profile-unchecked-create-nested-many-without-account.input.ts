import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ExternalProfileCreateWithoutAccountInput } from './external-profile-create-without-account.input';
import { Type } from 'class-transformer';
import { ExternalProfileCreateOrConnectWithoutAccountInput } from './external-profile-create-or-connect-without-account.input';
import { ExternalProfileCreateManyAccountInputEnvelope } from './external-profile-create-many-account-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ExternalProfileWhereUniqueInput } from './external-profile-where-unique.input';

@InputType()
export class ExternalProfileUncheckedCreateNestedManyWithoutAccountInput {

    @Field(() => [ExternalProfileCreateWithoutAccountInput], {nullable:true})
    @Type(() => ExternalProfileCreateWithoutAccountInput)
    create?: Array<ExternalProfileCreateWithoutAccountInput>;

    @Field(() => [ExternalProfileCreateOrConnectWithoutAccountInput], {nullable:true})
    @Type(() => ExternalProfileCreateOrConnectWithoutAccountInput)
    connectOrCreate?: Array<ExternalProfileCreateOrConnectWithoutAccountInput>;

    @Field(() => ExternalProfileCreateManyAccountInputEnvelope, {nullable:true})
    @Type(() => ExternalProfileCreateManyAccountInputEnvelope)
    createMany?: ExternalProfileCreateManyAccountInputEnvelope;

    @Field(() => [ExternalProfileWhereUniqueInput], {nullable:true})
    @Type(() => ExternalProfileWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ExternalProfileWhereUniqueInput, 'id' | 'provider_externalId'>>;
}
