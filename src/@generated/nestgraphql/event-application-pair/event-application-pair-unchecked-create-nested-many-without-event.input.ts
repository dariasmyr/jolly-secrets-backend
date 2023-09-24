import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventApplicationPairCreateWithoutEventInput } from './event-application-pair-create-without-event.input';
import { Type } from 'class-transformer';
import { EventApplicationPairCreateOrConnectWithoutEventInput } from './event-application-pair-create-or-connect-without-event.input';
import { EventApplicationPairCreateManyEventInputEnvelope } from './event-application-pair-create-many-event-input-envelope.input';
import { Prisma } from '@prisma/client';
import { EventApplicationPairWhereUniqueInput } from './event-application-pair-where-unique.input';

@InputType()
export class EventApplicationPairUncheckedCreateNestedManyWithoutEventInput {

    @Field(() => [EventApplicationPairCreateWithoutEventInput], {nullable:true})
    @Type(() => EventApplicationPairCreateWithoutEventInput)
    create?: Array<EventApplicationPairCreateWithoutEventInput>;

    @Field(() => [EventApplicationPairCreateOrConnectWithoutEventInput], {nullable:true})
    @Type(() => EventApplicationPairCreateOrConnectWithoutEventInput)
    connectOrCreate?: Array<EventApplicationPairCreateOrConnectWithoutEventInput>;

    @Field(() => EventApplicationPairCreateManyEventInputEnvelope, {nullable:true})
    @Type(() => EventApplicationPairCreateManyEventInputEnvelope)
    createMany?: EventApplicationPairCreateManyEventInputEnvelope;

    @Field(() => [EventApplicationPairWhereUniqueInput], {nullable:true})
    @Type(() => EventApplicationPairWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<EventApplicationPairWhereUniqueInput, 'id'>>;
}
