import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EventApplicationCreateInput } from './event-application-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneEventApplicationArgs {

    @Field(() => EventApplicationCreateInput, {nullable:false})
    @Type(() => EventApplicationCreateInput)
    data!: EventApplicationCreateInput;
}
