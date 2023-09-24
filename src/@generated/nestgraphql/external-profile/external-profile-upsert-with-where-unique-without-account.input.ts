import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ExternalProfileWhereUniqueInput } from './external-profile-where-unique.input';
import { Type } from 'class-transformer';
import { ExternalProfileUpdateWithoutAccountInput } from './external-profile-update-without-account.input';
import { ExternalProfileCreateWithoutAccountInput } from './external-profile-create-without-account.input';

@InputType()
export class ExternalProfileUpsertWithWhereUniqueWithoutAccountInput {

    @Field(() => ExternalProfileWhereUniqueInput, {nullable:false})
    @Type(() => ExternalProfileWhereUniqueInput)
    where!: Prisma.AtLeast<ExternalProfileWhereUniqueInput, 'id' | 'provider_externalId'>;

    @Field(() => ExternalProfileUpdateWithoutAccountInput, {nullable:false})
    @Type(() => ExternalProfileUpdateWithoutAccountInput)
    update!: ExternalProfileUpdateWithoutAccountInput;

    @Field(() => ExternalProfileCreateWithoutAccountInput, {nullable:false})
    @Type(() => ExternalProfileCreateWithoutAccountInput)
    create!: ExternalProfileCreateWithoutAccountInput;
}
