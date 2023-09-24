import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EventApplicationWhereInput } from './event-application-where.input';
import { Type } from 'class-transformer';
import { EventApplicationOrderByWithRelationInput } from './event-application-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { EventApplicationWhereUniqueInput } from './event-application-where-unique.input';
import { Int } from '@nestjs/graphql';
import { EventApplicationScalarFieldEnum } from './event-application-scalar-field.enum';

@ArgsType()
export class FindManyEventApplicationArgs {

    @Field(() => EventApplicationWhereInput, {nullable:true})
    @Type(() => EventApplicationWhereInput)
    where?: EventApplicationWhereInput;

    @Field(() => [EventApplicationOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<EventApplicationOrderByWithRelationInput>;

    @Field(() => EventApplicationWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<EventApplicationWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [EventApplicationScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof EventApplicationScalarFieldEnum>;
}
