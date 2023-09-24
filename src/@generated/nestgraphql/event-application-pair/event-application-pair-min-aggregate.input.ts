import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class EventApplicationPairMinAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    createdAt?: true;

    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;

    @Field(() => Boolean, {nullable:true})
    eventId?: true;

    @Field(() => Boolean, {nullable:true})
    eventApplicationFirstId?: true;

    @Field(() => Boolean, {nullable:true})
    eventApplicationSecondId?: true;

    @Field(() => Boolean, {nullable:true})
    chatId?: true;
}
