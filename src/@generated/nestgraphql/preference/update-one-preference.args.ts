import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PreferenceUpdateInput } from './preference-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { PreferenceWhereUniqueInput } from './preference-where-unique.input';

@ArgsType()
export class UpdateOnePreferenceArgs {

    @Field(() => PreferenceUpdateInput, {nullable:false})
    @Type(() => PreferenceUpdateInput)
    data!: PreferenceUpdateInput;

    @Field(() => PreferenceWhereUniqueInput, {nullable:false})
    @Type(() => PreferenceWhereUniqueInput)
    where!: Prisma.AtLeast<PreferenceWhereUniqueInput, 'id'>;
}
