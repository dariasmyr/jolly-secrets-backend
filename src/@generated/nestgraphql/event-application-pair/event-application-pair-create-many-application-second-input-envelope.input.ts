import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventApplicationPairCreateManyApplicationSecondInput } from './event-application-pair-create-many-application-second.input';
import { Type } from 'class-transformer';

@InputType()
export class EventApplicationPairCreateManyApplicationSecondInputEnvelope {

    @Field(() => [EventApplicationPairCreateManyApplicationSecondInput], {nullable:false})
    @Type(() => EventApplicationPairCreateManyApplicationSecondInput)
    data!: Array<EventApplicationPairCreateManyApplicationSecondInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
