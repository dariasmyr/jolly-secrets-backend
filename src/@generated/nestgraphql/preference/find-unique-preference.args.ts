import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PreferenceWhereUniqueInput } from './preference-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniquePreferenceArgs {

    @Field(() => PreferenceWhereUniqueInput, {nullable:false})
    @Type(() => PreferenceWhereUniqueInput)
    where!: Prisma.AtLeast<PreferenceWhereUniqueInput, 'id'>;
}
