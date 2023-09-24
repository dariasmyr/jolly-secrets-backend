import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PreferenceUpdateManyMutationInput } from './preference-update-many-mutation.input';
import { Type } from 'class-transformer';
import { PreferenceWhereInput } from './preference-where.input';

@ArgsType()
export class UpdateManyPreferenceArgs {

    @Field(() => PreferenceUpdateManyMutationInput, {nullable:false})
    @Type(() => PreferenceUpdateManyMutationInput)
    data!: PreferenceUpdateManyMutationInput;

    @Field(() => PreferenceWhereInput, {nullable:true})
    @Type(() => PreferenceWhereInput)
    where?: PreferenceWhereInput;
}
