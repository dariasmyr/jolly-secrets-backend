import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventApplicationCreateWithoutEventApplicationFirstPairsInput } from './event-application-create-without-event-application-first-pairs.input';
import { Type } from 'class-transformer';
import { EventApplicationCreateOrConnectWithoutEventApplicationFirstPairsInput } from './event-application-create-or-connect-without-event-application-first-pairs.input';
import { EventApplicationUpsertWithoutEventApplicationFirstPairsInput } from './event-application-upsert-without-event-application-first-pairs.input';
import { Prisma } from '@prisma/client';
import { EventApplicationWhereUniqueInput } from './event-application-where-unique.input';
import { EventApplicationUpdateToOneWithWhereWithoutEventApplicationFirstPairsInput } from './event-application-update-to-one-with-where-without-event-application-first-pairs.input';

@InputType()
export class EventApplicationUpdateOneRequiredWithoutEventApplicationFirstPairsNestedInput {

    @Field(() => EventApplicationCreateWithoutEventApplicationFirstPairsInput, {nullable:true})
    @Type(() => EventApplicationCreateWithoutEventApplicationFirstPairsInput)
    create?: EventApplicationCreateWithoutEventApplicationFirstPairsInput;

    @Field(() => EventApplicationCreateOrConnectWithoutEventApplicationFirstPairsInput, {nullable:true})
    @Type(() => EventApplicationCreateOrConnectWithoutEventApplicationFirstPairsInput)
    connectOrCreate?: EventApplicationCreateOrConnectWithoutEventApplicationFirstPairsInput;

    @Field(() => EventApplicationUpsertWithoutEventApplicationFirstPairsInput, {nullable:true})
    @Type(() => EventApplicationUpsertWithoutEventApplicationFirstPairsInput)
    upsert?: EventApplicationUpsertWithoutEventApplicationFirstPairsInput;

    @Field(() => EventApplicationWhereUniqueInput, {nullable:true})
    @Type(() => EventApplicationWhereUniqueInput)
    connect?: Prisma.AtLeast<EventApplicationWhereUniqueInput, 'id'>;

    @Field(() => EventApplicationUpdateToOneWithWhereWithoutEventApplicationFirstPairsInput, {nullable:true})
    @Type(() => EventApplicationUpdateToOneWithWhereWithoutEventApplicationFirstPairsInput)
    update?: EventApplicationUpdateToOneWithWhereWithoutEventApplicationFirstPairsInput;
}
