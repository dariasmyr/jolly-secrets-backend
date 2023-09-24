import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventApplicationPairCreateWithoutApplicationFirstInput } from './event-application-pair-create-without-application-first.input';
import { Type } from 'class-transformer';
import { EventApplicationPairCreateOrConnectWithoutApplicationFirstInput } from './event-application-pair-create-or-connect-without-application-first.input';
import { EventApplicationPairUpsertWithWhereUniqueWithoutApplicationFirstInput } from './event-application-pair-upsert-with-where-unique-without-application-first.input';
import { EventApplicationPairCreateManyApplicationFirstInputEnvelope } from './event-application-pair-create-many-application-first-input-envelope.input';
import { Prisma } from '@prisma/client';
import { EventApplicationPairWhereUniqueInput } from './event-application-pair-where-unique.input';
import { EventApplicationPairUpdateWithWhereUniqueWithoutApplicationFirstInput } from './event-application-pair-update-with-where-unique-without-application-first.input';
import { EventApplicationPairUpdateManyWithWhereWithoutApplicationFirstInput } from './event-application-pair-update-many-with-where-without-application-first.input';
import { EventApplicationPairScalarWhereInput } from './event-application-pair-scalar-where.input';

@InputType()
export class EventApplicationPairUncheckedUpdateManyWithoutApplicationFirstNestedInput {

    @Field(() => [EventApplicationPairCreateWithoutApplicationFirstInput], {nullable:true})
    @Type(() => EventApplicationPairCreateWithoutApplicationFirstInput)
    create?: Array<EventApplicationPairCreateWithoutApplicationFirstInput>;

    @Field(() => [EventApplicationPairCreateOrConnectWithoutApplicationFirstInput], {nullable:true})
    @Type(() => EventApplicationPairCreateOrConnectWithoutApplicationFirstInput)
    connectOrCreate?: Array<EventApplicationPairCreateOrConnectWithoutApplicationFirstInput>;

    @Field(() => [EventApplicationPairUpsertWithWhereUniqueWithoutApplicationFirstInput], {nullable:true})
    @Type(() => EventApplicationPairUpsertWithWhereUniqueWithoutApplicationFirstInput)
    upsert?: Array<EventApplicationPairUpsertWithWhereUniqueWithoutApplicationFirstInput>;

    @Field(() => EventApplicationPairCreateManyApplicationFirstInputEnvelope, {nullable:true})
    @Type(() => EventApplicationPairCreateManyApplicationFirstInputEnvelope)
    createMany?: EventApplicationPairCreateManyApplicationFirstInputEnvelope;

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

    @Field(() => [EventApplicationPairUpdateWithWhereUniqueWithoutApplicationFirstInput], {nullable:true})
    @Type(() => EventApplicationPairUpdateWithWhereUniqueWithoutApplicationFirstInput)
    update?: Array<EventApplicationPairUpdateWithWhereUniqueWithoutApplicationFirstInput>;

    @Field(() => [EventApplicationPairUpdateManyWithWhereWithoutApplicationFirstInput], {nullable:true})
    @Type(() => EventApplicationPairUpdateManyWithWhereWithoutApplicationFirstInput)
    updateMany?: Array<EventApplicationPairUpdateManyWithWhereWithoutApplicationFirstInput>;

    @Field(() => [EventApplicationPairScalarWhereInput], {nullable:true})
    @Type(() => EventApplicationPairScalarWhereInput)
    deleteMany?: Array<EventApplicationPairScalarWhereInput>;
}
