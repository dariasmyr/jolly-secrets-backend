import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ExternalProfileWhereInput } from './external-profile-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyExternalProfileArgs {

    @Field(() => ExternalProfileWhereInput, {nullable:true})
    @Type(() => ExternalProfileWhereInput)
    where?: ExternalProfileWhereInput;
}
