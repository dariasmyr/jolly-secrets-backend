import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ExternalProfileCreateManyInput } from './external-profile-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyExternalProfileArgs {

    @Field(() => [ExternalProfileCreateManyInput], {nullable:false})
    @Type(() => ExternalProfileCreateManyInput)
    data!: Array<ExternalProfileCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
