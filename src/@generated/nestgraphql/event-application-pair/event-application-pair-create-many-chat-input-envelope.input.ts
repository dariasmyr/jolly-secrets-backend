import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventApplicationPairCreateManyChatInput } from './event-application-pair-create-many-chat.input';
import { Type } from 'class-transformer';

@InputType()
export class EventApplicationPairCreateManyChatInputEnvelope {

    @Field(() => [EventApplicationPairCreateManyChatInput], {nullable:false})
    @Type(() => EventApplicationPairCreateManyChatInput)
    data!: Array<EventApplicationPairCreateManyChatInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
