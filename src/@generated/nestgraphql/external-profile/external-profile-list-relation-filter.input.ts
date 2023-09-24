import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ExternalProfileWhereInput } from './external-profile-where.input';

@InputType()
export class ExternalProfileListRelationFilter {

    @Field(() => ExternalProfileWhereInput, {nullable:true})
    every?: ExternalProfileWhereInput;

    @Field(() => ExternalProfileWhereInput, {nullable:true})
    some?: ExternalProfileWhereInput;

    @Field(() => ExternalProfileWhereInput, {nullable:true})
    none?: ExternalProfileWhereInput;
}
