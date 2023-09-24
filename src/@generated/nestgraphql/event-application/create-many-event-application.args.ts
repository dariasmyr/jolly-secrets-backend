import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EventApplicationCreateManyInput } from './event-application-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyEventApplicationArgs {

    @Field(() => [EventApplicationCreateManyInput], {nullable:false})
    @Type(() => EventApplicationCreateManyInput)
    data!: Array<EventApplicationCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
