import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EventApplicationWhereInput } from './event-application-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyEventApplicationArgs {

    @Field(() => EventApplicationWhereInput, {nullable:true})
    @Type(() => EventApplicationWhereInput)
    where?: EventApplicationWhereInput;
}
