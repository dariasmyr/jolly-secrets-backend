import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ExternalProfileWhereUniqueInput } from './external-profile-where-unique.input';
import { Type } from 'class-transformer';
import { ExternalProfileCreateWithoutAccountInput } from './external-profile-create-without-account.input';

@InputType()
export class ExternalProfileCreateOrConnectWithoutAccountInput {

    @Field(() => ExternalProfileWhereUniqueInput, {nullable:false})
    @Type(() => ExternalProfileWhereUniqueInput)
    where!: Prisma.AtLeast<ExternalProfileWhereUniqueInput, 'id' | 'provider_externalId'>;

    @Field(() => ExternalProfileCreateWithoutAccountInput, {nullable:false})
    @Type(() => ExternalProfileCreateWithoutAccountInput)
    create!: ExternalProfileCreateWithoutAccountInput;
}
