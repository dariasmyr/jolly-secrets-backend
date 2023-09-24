import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ExternalProfileWhereUniqueInput } from './external-profile-where-unique.input';
import { Type } from 'class-transformer';
import { ExternalProfileCreateInput } from './external-profile-create.input';
import { ExternalProfileUpdateInput } from './external-profile-update.input';

@ArgsType()
export class UpsertOneExternalProfileArgs {

    @Field(() => ExternalProfileWhereUniqueInput, {nullable:false})
    @Type(() => ExternalProfileWhereUniqueInput)
    where!: Prisma.AtLeast<ExternalProfileWhereUniqueInput, 'id' | 'provider_externalId'>;

    @Field(() => ExternalProfileCreateInput, {nullable:false})
    @Type(() => ExternalProfileCreateInput)
    create!: ExternalProfileCreateInput;

    @Field(() => ExternalProfileUpdateInput, {nullable:false})
    @Type(() => ExternalProfileUpdateInput)
    update!: ExternalProfileUpdateInput;
}
