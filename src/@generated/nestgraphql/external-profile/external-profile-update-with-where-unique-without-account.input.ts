import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ExternalProfileWhereUniqueInput } from './external-profile-where-unique.input';
import { Type } from 'class-transformer';
import { ExternalProfileUpdateWithoutAccountInput } from './external-profile-update-without-account.input';

@InputType()
export class ExternalProfileUpdateWithWhereUniqueWithoutAccountInput {

    @Field(() => ExternalProfileWhereUniqueInput, {nullable:false})
    @Type(() => ExternalProfileWhereUniqueInput)
    where!: Prisma.AtLeast<ExternalProfileWhereUniqueInput, 'id' | 'provider_externalId'>;

    @Field(() => ExternalProfileUpdateWithoutAccountInput, {nullable:false})
    @Type(() => ExternalProfileUpdateWithoutAccountInput)
    data!: ExternalProfileUpdateWithoutAccountInput;
}
