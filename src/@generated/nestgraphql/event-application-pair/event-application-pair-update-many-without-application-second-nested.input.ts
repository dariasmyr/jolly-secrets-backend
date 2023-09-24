import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventApplicationPairCreateWithoutApplicationSecondInput } from './event-application-pair-create-without-application-second.input';
import { Type } from 'class-transformer';
import { EventApplicationPairCreateOrConnectWithoutApplicationSecondInput } from './event-application-pair-create-or-connect-without-application-second.input';
import { EventApplicationPairUpsertWithWhereUniqueWithoutApplicationSecondInput } from './event-application-pair-upsert-with-where-unique-without-application-second.input';
import { EventApplicationPairCreateManyApplicationSecondInputEnvelope } from './event-application-pair-create-many-application-second-input-envelope.input';
import { Prisma } from '@prisma/client';
import { EventApplicationPairWhereUniqueInput } from './event-application-pair-where-unique.input';
import { EventApplicationPairUpdateWithWhereUniqueWithoutApplicationSecondInput } from './event-application-pair-update-with-where-unique-without-application-second.input';
import { EventApplicationPairUpdateManyWithWhereWithoutApplicationSecondInput } from './event-application-pair-update-many-with-where-without-application-second.input';
import { EventApplicationPairScalarWhereInput } from './event-application-pair-scalar-where.input';

@InputType()
export class EventApplicationPairUpdateManyWithoutApplicationSecondNestedInput {

    @Field(() => [EventApplicationPairCreateWithoutApplicationSecondInput], {nullable:true})
    @Type(() => EventApplicationPairCreateWithoutApplicationSecondInput)
    create?: Array<EventApplicationPairCreateWithoutApplicationSecondInput>;

    @Field(() => [EventApplicationPairCreateOrConnectWithoutApplicationSecondInput], {nullable:true})
    @Type(() => EventApplicationPairCreateOrConnectWithoutApplicationSecondInput)
    connectOrCreate?: Array<EventApplicationPairCreateOrConnectWithoutApplicationSecondInput>;

    @Field(() => [EventApplicationPairUpsertWithWhereUniqueWithoutApplicationSecondInput], {nullable:true})
    @Type(() => EventApplicationPairUpsertWithWhereUniqueWithoutApplicationSecondInput)
    upsert?: Array<EventApplicationPairUpsertWithWhereUniqueWithoutApplicationSecondInput>;

    @Field(() => EventApplicationPairCreateManyApplicationSecondInputEnvelope, {nullable:true})
    @Type(() => EventApplicationPairCreateManyApplicationSecondInputEnvelope)
    createMany?: EventApplicationPairCreateManyApplicationSecondInputEnvelope;

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

    @Field(() => [EventApplicationPairUpdateWithWhereUniqueWithoutApplicationSecondInput], {nullable:true})
    @Type(() => EventApplicationPairUpdateWithWhereUniqueWithoutApplicationSecondInput)
    update?: Array<EventApplicationPairUpdateWithWhereUniqueWithoutApplicationSecondInput>;

    @Field(() => [EventApplicationPairUpdateManyWithWhereWithoutApplicationSecondInput], {nullable:true})
    @Type(() => EventApplicationPairUpdateManyWithWhereWithoutApplicationSecondInput)
    updateMany?: Array<EventApplicationPairUpdateManyWithWhereWithoutApplicationSecondInput>;

    @Field(() => [EventApplicationPairScalarWhereInput], {nullable:true})
    @Type(() => EventApplicationPairScalarWhereInput)
    deleteMany?: Array<EventApplicationPairScalarWhereInput>;
}
