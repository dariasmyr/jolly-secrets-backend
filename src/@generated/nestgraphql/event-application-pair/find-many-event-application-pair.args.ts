import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EventApplicationPairWhereInput } from './event-application-pair-where.input';
import { Type } from 'class-transformer';
import { EventApplicationPairOrderByWithRelationInput } from './event-application-pair-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { EventApplicationPairWhereUniqueInput } from './event-application-pair-where-unique.input';
import { Int } from '@nestjs/graphql';
import { EventApplicationPairScalarFieldEnum } from './event-application-pair-scalar-field.enum';

@ArgsType()
export class FindManyEventApplicationPairArgs {

    @Field(() => EventApplicationPairWhereInput, {nullable:true})
    @Type(() => EventApplicationPairWhereInput)
    where?: EventApplicationPairWhereInput;

    @Field(() => [EventApplicationPairOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<EventApplicationPairOrderByWithRelationInput>;

    @Field(() => EventApplicationPairWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<EventApplicationPairWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [EventApplicationPairScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof EventApplicationPairScalarFieldEnum>;
}
