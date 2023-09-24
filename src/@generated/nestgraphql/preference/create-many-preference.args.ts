import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PreferenceCreateManyInput } from './preference-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyPreferenceArgs {

    @Field(() => [PreferenceCreateManyInput], {nullable:false})
    @Type(() => PreferenceCreateManyInput)
    data!: Array<PreferenceCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
