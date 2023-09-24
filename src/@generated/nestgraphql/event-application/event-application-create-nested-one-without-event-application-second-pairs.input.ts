import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventApplicationCreateWithoutEventApplicationSecondPairsInput } from './event-application-create-without-event-application-second-pairs.input';
import { Type } from 'class-transformer';
import { EventApplicationCreateOrConnectWithoutEventApplicationSecondPairsInput } from './event-application-create-or-connect-without-event-application-second-pairs.input';
import { Prisma } from '@prisma/client';
import { EventApplicationWhereUniqueInput } from './event-application-where-unique.input';

@InputType()
export class EventApplicationCreateNestedOneWithoutEventApplicationSecondPairsInput {

    @Field(() => EventApplicationCreateWithoutEventApplicationSecondPairsInput, {nullable:true})
    @Type(() => EventApplicationCreateWithoutEventApplicationSecondPairsInput)
    create?: EventApplicationCreateWithoutEventApplicationSecondPairsInput;

    @Field(() => EventApplicationCreateOrConnectWithoutEventApplicationSecondPairsInput, {nullable:true})
    @Type(() => EventApplicationCreateOrConnectWithoutEventApplicationSecondPairsInput)
    connectOrCreate?: EventApplicationCreateOrConnectWithoutEventApplicationSecondPairsInput;

    @Field(() => EventApplicationWhereUniqueInput, {nullable:true})
    @Type(() => EventApplicationWhereUniqueInput)
    connect?: Prisma.AtLeast<EventApplicationWhereUniqueInput, 'id'>;
}
