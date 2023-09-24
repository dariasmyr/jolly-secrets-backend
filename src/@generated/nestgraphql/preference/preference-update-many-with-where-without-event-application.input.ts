import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PreferenceScalarWhereInput } from './preference-scalar-where.input';
import { Type } from 'class-transformer';
import { PreferenceUpdateManyMutationInput } from './preference-update-many-mutation.input';

@InputType()
export class PreferenceUpdateManyWithWhereWithoutEventApplicationInput {

    @Field(() => PreferenceScalarWhereInput, {nullable:false})
    @Type(() => PreferenceScalarWhereInput)
    where!: PreferenceScalarWhereInput;

    @Field(() => PreferenceUpdateManyMutationInput, {nullable:false})
    @Type(() => PreferenceUpdateManyMutationInput)
    data!: PreferenceUpdateManyMutationInput;
}
