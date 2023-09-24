import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { AccountOrderByWithRelationInput } from '../account/account-order-by-with-relation.input';
import { ChatOrderByWithRelationInput } from '../chat/chat-order-by-with-relation.input';

@InputType()
export class MessageOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    accountId?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    chatId?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    text?: keyof typeof SortOrder;

    @Field(() => AccountOrderByWithRelationInput, {nullable:true})
    account?: AccountOrderByWithRelationInput;

    @Field(() => ChatOrderByWithRelationInput, {nullable:true})
    chat?: ChatOrderByWithRelationInput;
}
