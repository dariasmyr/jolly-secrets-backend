import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MessageWhereInput } from './message-where.input';
import { Type } from 'class-transformer';
import { MessageOrderByWithRelationInput } from './message-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { MessageWhereUniqueInput } from './message-where-unique.input';
import { Int } from '@nestjs/graphql';
import { MessageScalarFieldEnum } from './message-scalar-field.enum';

@ArgsType()
export class FindFirstMessageArgs {

    @Field(() => MessageWhereInput, {nullable:true})
    @Type(() => MessageWhereInput)
    where?: MessageWhereInput;

    @Field(() => [MessageOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<MessageOrderByWithRelationInput>;

    @Field(() => MessageWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<MessageWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [MessageScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof MessageScalarFieldEnum>;
}
