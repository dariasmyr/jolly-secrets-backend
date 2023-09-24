import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ExternalProfileCreateInput } from './external-profile-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneExternalProfileArgs {

    @Field(() => ExternalProfileCreateInput, {nullable:false})
    @Type(() => ExternalProfileCreateInput)
    data!: ExternalProfileCreateInput;
}
