import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class EventApplicationPairAvgAggregate {

    @Field(() => Float, {nullable:true})
    id?: number;

    @Field(() => Float, {nullable:true})
    eventId?: number;

    @Field(() => Float, {nullable:true})
    eventApplicationFirstId?: number;

    @Field(() => Float, {nullable:true})
    eventApplicationSecondId?: number;
}
