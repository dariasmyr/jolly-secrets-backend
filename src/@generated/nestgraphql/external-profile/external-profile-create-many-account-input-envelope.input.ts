import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ExternalProfileCreateManyAccountInput } from './external-profile-create-many-account.input';
import { Type } from 'class-transformer';

@InputType()
export class ExternalProfileCreateManyAccountInputEnvelope {

    @Field(() => [ExternalProfileCreateManyAccountInput], {nullable:false})
    @Type(() => ExternalProfileCreateManyAccountInput)
    data!: Array<ExternalProfileCreateManyAccountInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
