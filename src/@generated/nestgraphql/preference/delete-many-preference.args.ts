import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PreferenceWhereInput } from './preference-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyPreferenceArgs {

    @Field(() => PreferenceWhereInput, {nullable:true})
    @Type(() => PreferenceWhereInput)
    where?: PreferenceWhereInput;
}
