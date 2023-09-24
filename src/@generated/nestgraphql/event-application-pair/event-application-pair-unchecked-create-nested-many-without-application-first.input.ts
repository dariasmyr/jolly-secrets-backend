import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventApplicationPairCreateWithoutApplicationFirstInput } from './event-application-pair-create-without-application-first.input';
import { Type } from 'class-transformer';
import { EventApplicationPairCreateOrConnectWithoutApplicationFirstInput } from './event-application-pair-create-or-connect-without-application-first.input';
import { EventApplicationPairCreateManyApplicationFirstInputEnvelope } from './event-application-pair-create-many-application-first-input-envelope.input';
import { Prisma } from '@prisma/client';
import { EventApplicationPairWhereUniqueInput } from './event-application-pair-where-unique.input';

@InputType()
export class EventApplicationPairUncheckedCreateNestedManyWithoutApplicationFirstInput {

    @Field(() => [EventApplicationPairCreateWithoutApplicationFirstInput], {nullable:true})
    @Type(() => EventApplicationPairCreateWithoutApplicationFirstInput)
    create?: Array<EventApplicationPairCreateWithoutApplicationFirstInput>;

    @Field(() => [EventApplicationPairCreateOrConnectWithoutApplicationFirstInput], {nullable:true})
    @Type(() => EventApplicationPairCreateOrConnectWithoutApplicationFirstInput)
    connectOrCreate?: Array<EventApplicationPairCreateOrConnectWithoutApplicationFirstInput>;

    @Field(() => EventApplicationPairCreateManyApplicationFirstInputEnvelope, {nullable:true})
    @Type(() => EventApplicationPairCreateManyApplicationFirstInputEnvelope)
    createMany?: EventApplicationPairCreateManyApplicationFirstInputEnvelope;

    @Field(() => [EventApplicationPairWhereUniqueInput], {nullable:true})
    @Type(() => EventApplicationPairWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<EventApplicationPairWhereUniqueInput, 'id'>>;
}
