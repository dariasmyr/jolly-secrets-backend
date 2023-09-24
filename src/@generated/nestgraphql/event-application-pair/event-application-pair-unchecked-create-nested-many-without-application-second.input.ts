import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventApplicationPairCreateWithoutApplicationSecondInput } from './event-application-pair-create-without-application-second.input';
import { Type } from 'class-transformer';
import { EventApplicationPairCreateOrConnectWithoutApplicationSecondInput } from './event-application-pair-create-or-connect-without-application-second.input';
import { EventApplicationPairCreateManyApplicationSecondInputEnvelope } from './event-application-pair-create-many-application-second-input-envelope.input';
import { Prisma } from '@prisma/client';
import { EventApplicationPairWhereUniqueInput } from './event-application-pair-where-unique.input';

@InputType()
export class EventApplicationPairUncheckedCreateNestedManyWithoutApplicationSecondInput {

    @Field(() => [EventApplicationPairCreateWithoutApplicationSecondInput], {nullable:true})
    @Type(() => EventApplicationPairCreateWithoutApplicationSecondInput)
    create?: Array<EventApplicationPairCreateWithoutApplicationSecondInput>;

    @Field(() => [EventApplicationPairCreateOrConnectWithoutApplicationSecondInput], {nullable:true})
    @Type(() => EventApplicationPairCreateOrConnectWithoutApplicationSecondInput)
    connectOrCreate?: Array<EventApplicationPairCreateOrConnectWithoutApplicationSecondInput>;

    @Field(() => EventApplicationPairCreateManyApplicationSecondInputEnvelope, {nullable:true})
    @Type(() => EventApplicationPairCreateManyApplicationSecondInputEnvelope)
    createMany?: EventApplicationPairCreateManyApplicationSecondInputEnvelope;

    @Field(() => [EventApplicationPairWhereUniqueInput], {nullable:true})
    @Type(() => EventApplicationPairWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<EventApplicationPairWhereUniqueInput, 'id'>>;
}
