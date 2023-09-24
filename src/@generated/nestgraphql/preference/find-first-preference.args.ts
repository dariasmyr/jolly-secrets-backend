import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PreferenceWhereInput } from './preference-where.input';
import { Type } from 'class-transformer';
import { PreferenceOrderByWithRelationInput } from './preference-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { PreferenceWhereUniqueInput } from './preference-where-unique.input';
import { Int } from '@nestjs/graphql';
import { PreferenceScalarFieldEnum } from './preference-scalar-field.enum';

@ArgsType()
export class FindFirstPreferenceArgs {

    @Field(() => PreferenceWhereInput, {nullable:true})
    @Type(() => PreferenceWhereInput)
    where?: PreferenceWhereInput;

    @Field(() => [PreferenceOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<PreferenceOrderByWithRelationInput>;

    @Field(() => PreferenceWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<PreferenceWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [PreferenceScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof PreferenceScalarFieldEnum>;
}
