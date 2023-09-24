import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventApplicationCreateWithoutEventApplicationSecondPairsInput } from './event-application-create-without-event-application-second-pairs.input';
import { Type } from 'class-transformer';
import { EventApplicationCreateOrConnectWithoutEventApplicationSecondPairsInput } from './event-application-create-or-connect-without-event-application-second-pairs.input';
import { EventApplicationUpsertWithoutEventApplicationSecondPairsInput } from './event-application-upsert-without-event-application-second-pairs.input';
import { Prisma } from '@prisma/client';
import { EventApplicationWhereUniqueInput } from './event-application-where-unique.input';
import { EventApplicationUpdateToOneWithWhereWithoutEventApplicationSecondPairsInput } from './event-application-update-to-one-with-where-without-event-application-second-pairs.input';

@InputType()
export class EventApplicationUpdateOneRequiredWithoutEventApplicationSecondPairsNestedInput {

    @Field(() => EventApplicationCreateWithoutEventApplicationSecondPairsInput, {nullable:true})
    @Type(() => EventApplicationCreateWithoutEventApplicationSecondPairsInput)
    create?: EventApplicationCreateWithoutEventApplicationSecondPairsInput;

    @Field(() => EventApplicationCreateOrConnectWithoutEventApplicationSecondPairsInput, {nullable:true})
    @Type(() => EventApplicationCreateOrConnectWithoutEventApplicationSecondPairsInput)
    connectOrCreate?: EventApplicationCreateOrConnectWithoutEventApplicationSecondPairsInput;

    @Field(() => EventApplicationUpsertWithoutEventApplicationSecondPairsInput, {nullable:true})
    @Type(() => EventApplicationUpsertWithoutEventApplicationSecondPairsInput)
    upsert?: EventApplicationUpsertWithoutEventApplicationSecondPairsInput;

    @Field(() => EventApplicationWhereUniqueInput, {nullable:true})
    @Type(() => EventApplicationWhereUniqueInput)
    connect?: Prisma.AtLeast<EventApplicationWhereUniqueInput, 'id'>;

    @Field(() => EventApplicationUpdateToOneWithWhereWithoutEventApplicationSecondPairsInput, {nullable:true})
    @Type(() => EventApplicationUpdateToOneWithWhereWithoutEventApplicationSecondPairsInput)
    update?: EventApplicationUpdateToOneWithWhereWithoutEventApplicationSecondPairsInput;
}
