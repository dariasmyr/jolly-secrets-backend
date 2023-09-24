import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EventApplicationPairCreateInput } from './event-application-pair-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneEventApplicationPairArgs {

    @Field(() => EventApplicationPairCreateInput, {nullable:false})
    @Type(() => EventApplicationPairCreateInput)
    data!: EventApplicationPairCreateInput;
}
