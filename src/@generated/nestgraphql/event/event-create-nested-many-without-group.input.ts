import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventCreateWithoutGroupInput } from './event-create-without-group.input';
import { Type } from 'class-transformer';
import { EventCreateOrConnectWithoutGroupInput } from './event-create-or-connect-without-group.input';
import { EventCreateManyGroupInputEnvelope } from './event-create-many-group-input-envelope.input';
import { Prisma } from '@prisma/client';
import { EventWhereUniqueInput } from './event-where-unique.input';

@InputType()
export class EventCreateNestedManyWithoutGroupInput {

    @Field(() => [EventCreateWithoutGroupInput], {nullable:true})
    @Type(() => EventCreateWithoutGroupInput)
    create?: Array<EventCreateWithoutGroupInput>;

    @Field(() => [EventCreateOrConnectWithoutGroupInput], {nullable:true})
    @Type(() => EventCreateOrConnectWithoutGroupInput)
    connectOrCreate?: Array<EventCreateOrConnectWithoutGroupInput>;

    @Field(() => EventCreateManyGroupInputEnvelope, {nullable:true})
    @Type(() => EventCreateManyGroupInputEnvelope)
    createMany?: EventCreateManyGroupInputEnvelope;

    @Field(() => [EventWhereUniqueInput], {nullable:true})
    @Type(() => EventWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<EventWhereUniqueInput, 'id' | 'groupId_name'>>;
}
