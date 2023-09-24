import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventCreateManyGroupInput } from './event-create-many-group.input';
import { Type } from 'class-transformer';

@InputType()
export class EventCreateManyGroupInputEnvelope {

    @Field(() => [EventCreateManyGroupInput], {nullable:false})
    @Type(() => EventCreateManyGroupInput)
    data!: Array<EventCreateManyGroupInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
