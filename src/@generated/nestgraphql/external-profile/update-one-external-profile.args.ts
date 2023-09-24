import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ExternalProfileUpdateInput } from './external-profile-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { ExternalProfileWhereUniqueInput } from './external-profile-where-unique.input';

@ArgsType()
export class UpdateOneExternalProfileArgs {

    @Field(() => ExternalProfileUpdateInput, {nullable:false})
    @Type(() => ExternalProfileUpdateInput)
    data!: ExternalProfileUpdateInput;

    @Field(() => ExternalProfileWhereUniqueInput, {nullable:false})
    @Type(() => ExternalProfileWhereUniqueInput)
    where!: Prisma.AtLeast<ExternalProfileWhereUniqueInput, 'id' | 'provider_externalId'>;
}
