import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventApplicationWhereInput } from './event-application-where.input';

@InputType()
export class EventApplicationNullableRelationFilter {

    @Field(() => EventApplicationWhereInput, {nullable:true})
    is?: EventApplicationWhereInput;

    @Field(() => EventApplicationWhereInput, {nullable:true})
    isNot?: EventApplicationWhereInput;
}
