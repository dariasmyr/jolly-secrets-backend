import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventCreateWithoutApplicationPairsInput } from './event-create-without-application-pairs.input';
import { Type } from 'class-transformer';
import { EventCreateOrConnectWithoutApplicationPairsInput } from './event-create-or-connect-without-application-pairs.input';
import { EventUpsertWithoutApplicationPairsInput } from './event-upsert-without-application-pairs.input';
import { Prisma } from '@prisma/client';
import { EventWhereUniqueInput } from './event-where-unique.input';
import { EventUpdateToOneWithWhereWithoutApplicationPairsInput } from './event-update-to-one-with-where-without-application-pairs.input';

@InputType()
export class EventUpdateOneRequiredWithoutApplicationPairsNestedInput {

    @Field(() => EventCreateWithoutApplicationPairsInput, {nullable:true})
    @Type(() => EventCreateWithoutApplicationPairsInput)
    create?: EventCreateWithoutApplicationPairsInput;

    @Field(() => EventCreateOrConnectWithoutApplicationPairsInput, {nullable:true})
    @Type(() => EventCreateOrConnectWithoutApplicationPairsInput)
    connectOrCreate?: EventCreateOrConnectWithoutApplicationPairsInput;

    @Field(() => EventUpsertWithoutApplicationPairsInput, {nullable:true})
    @Type(() => EventUpsertWithoutApplicationPairsInput)
    upsert?: EventUpsertWithoutApplicationPairsInput;

    @Field(() => EventWhereUniqueInput, {nullable:true})
    @Type(() => EventWhereUniqueInput)
    connect?: Prisma.AtLeast<EventWhereUniqueInput, 'id' | 'groupId_name'>;

    @Field(() => EventUpdateToOneWithWhereWithoutApplicationPairsInput, {nullable:true})
    @Type(() => EventUpdateToOneWithWhereWithoutApplicationPairsInput)
    update?: EventUpdateToOneWithWhereWithoutApplicationPairsInput;
}
