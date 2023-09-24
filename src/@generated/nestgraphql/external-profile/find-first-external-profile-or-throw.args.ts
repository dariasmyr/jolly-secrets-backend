import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ExternalProfileWhereInput } from './external-profile-where.input';
import { Type } from 'class-transformer';
import { ExternalProfileOrderByWithRelationInput } from './external-profile-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { ExternalProfileWhereUniqueInput } from './external-profile-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ExternalProfileScalarFieldEnum } from './external-profile-scalar-field.enum';

@ArgsType()
export class FindFirstExternalProfileOrThrowArgs {

    @Field(() => ExternalProfileWhereInput, {nullable:true})
    @Type(() => ExternalProfileWhereInput)
    where?: ExternalProfileWhereInput;

    @Field(() => [ExternalProfileOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ExternalProfileOrderByWithRelationInput>;

    @Field(() => ExternalProfileWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<ExternalProfileWhereUniqueInput, 'id' | 'provider_externalId'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [ExternalProfileScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof ExternalProfileScalarFieldEnum>;
}
