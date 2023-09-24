import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventCreateWithoutApplicationPairsInput } from './event-create-without-application-pairs.input';
import { Type } from 'class-transformer';
import { EventCreateOrConnectWithoutApplicationPairsInput } from './event-create-or-connect-without-application-pairs.input';
import { Prisma } from '@prisma/client';
import { EventWhereUniqueInput } from './event-where-unique.input';

@InputType()
export class EventCreateNestedOneWithoutApplicationPairsInput {

    @Field(() => EventCreateWithoutApplicationPairsInput, {nullable:true})
    @Type(() => EventCreateWithoutApplicationPairsInput)
    create?: EventCreateWithoutApplicationPairsInput;

    @Field(() => EventCreateOrConnectWithoutApplicationPairsInput, {nullable:true})
    @Type(() => EventCreateOrConnectWithoutApplicationPairsInput)
    connectOrCreate?: EventCreateOrConnectWithoutApplicationPairsInput;

    @Field(() => EventWhereUniqueInput, {nullable:true})
    @Type(() => EventWhereUniqueInput)
    connect?: Prisma.AtLeast<EventWhereUniqueInput, 'id' | 'groupId_name'>;
}
