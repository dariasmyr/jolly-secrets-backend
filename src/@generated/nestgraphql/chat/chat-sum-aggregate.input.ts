import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class ChatSumAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;
}
