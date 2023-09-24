import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventApplicationPairWhereInput } from './event-application-pair-where.input';

@InputType()
export class EventApplicationPairListRelationFilter {

    @Field(() => EventApplicationPairWhereInput, {nullable:true})
    every?: EventApplicationPairWhereInput;

    @Field(() => EventApplicationPairWhereInput, {nullable:true})
    some?: EventApplicationPairWhereInput;

    @Field(() => EventApplicationPairWhereInput, {nullable:true})
    none?: EventApplicationPairWhereInput;
}
