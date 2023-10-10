import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { EventOrderByWithRelationInput } from '../event/event-order-by-with-relation.input';
import { EventApplicationOrderByWithRelationInput } from '../event-application/event-application-order-by-with-relation.input';
import { ChatOrderByWithRelationInput } from '../chat/chat-order-by-with-relation.input';

@InputType()
export class EventApplicationPairOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    eventId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    eventApplicationFirstId?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    eventApplicationSecondId?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    chatId?: SortOrderInput;

    @Field(() => EventOrderByWithRelationInput, {nullable:true})
    event?: EventOrderByWithRelationInput;

    @Field(() => EventApplicationOrderByWithRelationInput, {nullable:true})
    applicationFirst?: EventApplicationOrderByWithRelationInput;

    @Field(() => EventApplicationOrderByWithRelationInput, {nullable:true})
    applicationSecond?: EventApplicationOrderByWithRelationInput;

    @Field(() => ChatOrderByWithRelationInput, {nullable:true})
    chat?: ChatOrderByWithRelationInput;
}
