import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class EventApplicationPairSumOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    eventId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    eventApplicationFirstId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    eventApplicationSecondId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    chatId?: keyof typeof SortOrder;
}
