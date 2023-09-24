import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventApplicationPairCreateManyEventInput } from './event-application-pair-create-many-event.input';
import { Type } from 'class-transformer';

@InputType()
export class EventApplicationPairCreateManyEventInputEnvelope {

    @Field(() => [EventApplicationPairCreateManyEventInput], {nullable:false})
    @Type(() => EventApplicationPairCreateManyEventInput)
    data!: Array<EventApplicationPairCreateManyEventInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
