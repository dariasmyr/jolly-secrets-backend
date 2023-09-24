import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { EventOrderByWithRelationInput } from '../event/event-order-by-with-relation.input';
import { EventApplicationOrderByWithRelationInput } from '../event-application/event-application-order-by-with-relation.input';

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

    @Field(() => SortOrder, {nullable:true})
    eventApplicationSecondId?: keyof typeof SortOrder;

    @Field(() => EventOrderByWithRelationInput, {nullable:true})
    event?: EventOrderByWithRelationInput;

    @Field(() => EventApplicationOrderByWithRelationInput, {nullable:true})
    applicationFirst?: EventApplicationOrderByWithRelationInput;

    @Field(() => EventApplicationOrderByWithRelationInput, {nullable:true})
    applicationSecond?: EventApplicationOrderByWithRelationInput;
}
