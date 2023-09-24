import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class EventApplicationPairAvgAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    eventId?: true;

    @Field(() => Boolean, {nullable:true})
    eventApplicationFirstId?: true;

    @Field(() => Boolean, {nullable:true})
    eventApplicationSecondId?: true;

    @Field(() => Boolean, {nullable:true})
    chatId?: true;
}
