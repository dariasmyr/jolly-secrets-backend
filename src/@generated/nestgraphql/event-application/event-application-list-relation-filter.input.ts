import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventApplicationWhereInput } from './event-application-where.input';

@InputType()
export class EventApplicationListRelationFilter {

    @Field(() => EventApplicationWhereInput, {nullable:true})
    every?: EventApplicationWhereInput;

    @Field(() => EventApplicationWhereInput, {nullable:true})
    some?: EventApplicationWhereInput;

    @Field(() => EventApplicationWhereInput, {nullable:true})
    none?: EventApplicationWhereInput;
}
