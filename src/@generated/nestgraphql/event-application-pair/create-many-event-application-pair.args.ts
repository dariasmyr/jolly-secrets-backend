import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EventApplicationPairCreateManyInput } from './event-application-pair-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyEventApplicationPairArgs {

    @Field(() => [EventApplicationPairCreateManyInput], {nullable:false})
    @Type(() => EventApplicationPairCreateManyInput)
    data!: Array<EventApplicationPairCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
