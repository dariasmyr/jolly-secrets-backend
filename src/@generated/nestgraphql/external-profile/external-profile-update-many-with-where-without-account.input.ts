import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ExternalProfileScalarWhereInput } from './external-profile-scalar-where.input';
import { Type } from 'class-transformer';
import { ExternalProfileUpdateManyMutationInput } from './external-profile-update-many-mutation.input';

@InputType()
export class ExternalProfileUpdateManyWithWhereWithoutAccountInput {

    @Field(() => ExternalProfileScalarWhereInput, {nullable:false})
    @Type(() => ExternalProfileScalarWhereInput)
    where!: ExternalProfileScalarWhereInput;

    @Field(() => ExternalProfileUpdateManyMutationInput, {nullable:false})
    @Type(() => ExternalProfileUpdateManyMutationInput)
    data!: ExternalProfileUpdateManyMutationInput;
}
