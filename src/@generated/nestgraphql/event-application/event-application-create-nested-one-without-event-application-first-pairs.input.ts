import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventApplicationCreateWithoutEventApplicationFirstPairsInput } from './event-application-create-without-event-application-first-pairs.input';
import { Type } from 'class-transformer';
import { EventApplicationCreateOrConnectWithoutEventApplicationFirstPairsInput } from './event-application-create-or-connect-without-event-application-first-pairs.input';
import { Prisma } from '@prisma/client';
import { EventApplicationWhereUniqueInput } from './event-application-where-unique.input';

@InputType()
export class EventApplicationCreateNestedOneWithoutEventApplicationFirstPairsInput {

    @Field(() => EventApplicationCreateWithoutEventApplicationFirstPairsInput, {nullable:true})
    @Type(() => EventApplicationCreateWithoutEventApplicationFirstPairsInput)
    create?: EventApplicationCreateWithoutEventApplicationFirstPairsInput;

    @Field(() => EventApplicationCreateOrConnectWithoutEventApplicationFirstPairsInput, {nullable:true})
    @Type(() => EventApplicationCreateOrConnectWithoutEventApplicationFirstPairsInput)
    connectOrCreate?: EventApplicationCreateOrConnectWithoutEventApplicationFirstPairsInput;

    @Field(() => EventApplicationWhereUniqueInput, {nullable:true})
    @Type(() => EventApplicationWhereUniqueInput)
    connect?: Prisma.AtLeast<EventApplicationWhereUniqueInput, 'id'>;
}
