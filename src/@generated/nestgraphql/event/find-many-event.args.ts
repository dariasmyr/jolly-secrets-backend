import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EventWhereInput } from './event-where.input';
import { Type } from 'class-transformer';
import { EventOrderByWithRelationInput } from './event-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { EventWhereUniqueInput } from './event-where-unique.input';
import { Int } from '@nestjs/graphql';
import { EventScalarFieldEnum } from './event-scalar-field.enum';

@ArgsType()
export class FindManyEventArgs {

    @Field(() => EventWhereInput, {nullable:true})
    @Type(() => EventWhereInput)
    where?: EventWhereInput;

    @Field(() => [EventOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<EventOrderByWithRelationInput>;

    @Field(() => EventWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<EventWhereUniqueInput, 'id' | 'groupId_name'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [EventScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof EventScalarFieldEnum>;
}
