import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ChatMemberWhereInput } from './chat-member-where.input';
import { Type } from 'class-transformer';
import { ChatMemberOrderByWithRelationInput } from './chat-member-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { ChatMemberWhereUniqueInput } from './chat-member-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ChatMemberScalarFieldEnum } from './chat-member-scalar-field.enum';

@ArgsType()
export class FindManyChatMemberArgs {

    @Field(() => ChatMemberWhereInput, {nullable:true})
    @Type(() => ChatMemberWhereInput)
    where?: ChatMemberWhereInput;

    @Field(() => [ChatMemberOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ChatMemberOrderByWithRelationInput>;

    @Field(() => ChatMemberWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<ChatMemberWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [ChatMemberScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof ChatMemberScalarFieldEnum>;
}
