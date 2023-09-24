import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PreferenceWhereInput } from './preference-where.input';

@InputType()
export class PreferenceListRelationFilter {

    @Field(() => PreferenceWhereInput, {nullable:true})
    every?: PreferenceWhereInput;

    @Field(() => PreferenceWhereInput, {nullable:true})
    some?: PreferenceWhereInput;

    @Field(() => PreferenceWhereInput, {nullable:true})
    none?: PreferenceWhereInput;
}
