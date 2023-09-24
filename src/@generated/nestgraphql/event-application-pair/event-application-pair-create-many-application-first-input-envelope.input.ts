import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventApplicationPairCreateManyApplicationFirstInput } from './event-application-pair-create-many-application-first.input';
import { Type } from 'class-transformer';

@InputType()
export class EventApplicationPairCreateManyApplicationFirstInputEnvelope {

    @Field(() => [EventApplicationPairCreateManyApplicationFirstInput], {nullable:false})
    @Type(() => EventApplicationPairCreateManyApplicationFirstInput)
    data!: Array<EventApplicationPairCreateManyApplicationFirstInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
