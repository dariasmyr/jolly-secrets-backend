import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ExternalProfileUpdateManyMutationInput } from './external-profile-update-many-mutation.input';
import { Type } from 'class-transformer';
import { ExternalProfileWhereInput } from './external-profile-where.input';

@ArgsType()
export class UpdateManyExternalProfileArgs {

    @Field(() => ExternalProfileUpdateManyMutationInput, {nullable:false})
    @Type(() => ExternalProfileUpdateManyMutationInput)
    data!: ExternalProfileUpdateManyMutationInput;

    @Field(() => ExternalProfileWhereInput, {nullable:true})
    @Type(() => ExternalProfileWhereInput)
    where?: ExternalProfileWhereInput;
}
