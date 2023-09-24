import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PreferenceWhereUniqueInput } from './preference-where-unique.input';
import { Type } from 'class-transformer';
import { PreferenceCreateInput } from './preference-create.input';
import { PreferenceUpdateInput } from './preference-update.input';

@ArgsType()
export class UpsertOnePreferenceArgs {

    @Field(() => PreferenceWhereUniqueInput, {nullable:false})
    @Type(() => PreferenceWhereUniqueInput)
    where!: Prisma.AtLeast<PreferenceWhereUniqueInput, 'id'>;

    @Field(() => PreferenceCreateInput, {nullable:false})
    @Type(() => PreferenceCreateInput)
    create!: PreferenceCreateInput;

    @Field(() => PreferenceUpdateInput, {nullable:false})
    @Type(() => PreferenceUpdateInput)
    update!: PreferenceUpdateInput;
}
