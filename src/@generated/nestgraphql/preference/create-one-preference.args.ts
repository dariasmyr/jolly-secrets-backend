import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PreferenceCreateInput } from './preference-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOnePreferenceArgs {

    @Field(() => PreferenceCreateInput, {nullable:false})
    @Type(() => PreferenceCreateInput)
    data!: PreferenceCreateInput;
}
