import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EventApplicationPairWhereInput } from './event-application-pair-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyEventApplicationPairArgs {

    @Field(() => EventApplicationPairWhereInput, {nullable:true})
    @Type(() => EventApplicationPairWhereInput)
    where?: EventApplicationPairWhereInput;
}
