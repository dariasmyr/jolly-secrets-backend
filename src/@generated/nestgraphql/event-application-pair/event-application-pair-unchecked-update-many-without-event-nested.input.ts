import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventApplicationPairCreateWithoutEventInput } from './event-application-pair-create-without-event.input';
import { Type } from 'class-transformer';
import { EventApplicationPairCreateOrConnectWithoutEventInput } from './event-application-pair-create-or-connect-without-event.input';
import { EventApplicationPairUpsertWithWhereUniqueWithoutEventInput } from './event-application-pair-upsert-with-where-unique-without-event.input';
import { EventApplicationPairCreateManyEventInputEnvelope } from './event-application-pair-create-many-event-input-envelope.input';
import { Prisma } from '@prisma/client';
import { EventApplicationPairWhereUniqueInput } from './event-application-pair-where-unique.input';
import { EventApplicationPairUpdateWithWhereUniqueWithoutEventInput } from './event-application-pair-update-with-where-unique-without-event.input';
import { EventApplicationPairUpdateManyWithWhereWithoutEventInput } from './event-application-pair-update-many-with-where-without-event.input';
import { EventApplicationPairScalarWhereInput } from './event-application-pair-scalar-where.input';

@InputType()
export class EventApplicationPairUncheckedUpdateManyWithoutEventNestedInput {

    @Field(() => [EventApplicationPairCreateWithoutEventInput], {nullable:true})
    @Type(() => EventApplicationPairCreateWithoutEventInput)
    create?: Array<EventApplicationPairCreateWithoutEventInput>;

    @Field(() => [EventApplicationPairCreateOrConnectWithoutEventInput], {nullable:true})
    @Type(() => EventApplicationPairCreateOrConnectWithoutEventInput)
    connectOrCreate?: Array<EventApplicationPairCreateOrConnectWithoutEventInput>;

    @Field(() => [EventApplicationPairUpsertWithWhereUniqueWithoutEventInput], {nullable:true})
    @Type(() => EventApplicationPairUpsertWithWhereUniqueWithoutEventInput)
    upsert?: Array<EventApplicationPairUpsertWithWhereUniqueWithoutEventInput>;

    @Field(() => EventApplicationPairCreateManyEventInputEnvelope, {nullable:true})
    @Type(() => EventApplicationPairCreateManyEventInputEnvelope)
    createMany?: EventApplicationPairCreateManyEventInputEnvelope;

    @Field(() => [EventApplicationPairWhereUniqueInput], {nullable:true})
    @Type(() => EventApplicationPairWhereUniqueInput)
    set?: Array<Prisma.AtLeast<EventApplicationPairWhereUniqueInput, 'id'>>;

    @Field(() => [EventApplicationPairWhereUniqueInput], {nullable:true})
    @Type(() => EventApplicationPairWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<EventApplicationPairWhereUniqueInput, 'id'>>;

    @Field(() => [EventApplicationPairWhereUniqueInput], {nullable:true})
    @Type(() => EventApplicationPairWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<EventApplicationPairWhereUniqueInput, 'id'>>;

    @Field(() => [EventApplicationPairWhereUniqueInput], {nullable:true})
    @Type(() => EventApplicationPairWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<EventApplicationPairWhereUniqueInput, 'id'>>;

    @Field(() => [EventApplicationPairUpdateWithWhereUniqueWithoutEventInput], {nullable:true})
    @Type(() => EventApplicationPairUpdateWithWhereUniqueWithoutEventInput)
    update?: Array<EventApplicationPairUpdateWithWhereUniqueWithoutEventInput>;

    @Field(() => [EventApplicationPairUpdateManyWithWhereWithoutEventInput], {nullable:true})
    @Type(() => EventApplicationPairUpdateManyWithWhereWithoutEventInput)
    updateMany?: Array<EventApplicationPairUpdateManyWithWhereWithoutEventInput>;

    @Field(() => [EventApplicationPairScalarWhereInput], {nullable:true})
    @Type(() => EventApplicationPairScalarWhereInput)
    deleteMany?: Array<EventApplicationPairScalarWhereInput>;
}
