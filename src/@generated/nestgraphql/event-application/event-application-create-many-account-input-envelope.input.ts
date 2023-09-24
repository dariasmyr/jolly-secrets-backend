import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventApplicationCreateManyAccountInput } from './event-application-create-many-account.input';
import { Type } from 'class-transformer';

@InputType()
export class EventApplicationCreateManyAccountInputEnvelope {

    @Field(() => [EventApplicationCreateManyAccountInput], {nullable:false})
    @Type(() => EventApplicationCreateManyAccountInput)
    data!: Array<EventApplicationCreateManyAccountInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
