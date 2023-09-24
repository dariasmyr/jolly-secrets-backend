import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventCreateWithoutGroupInput } from './event-create-without-group.input';
import { Type } from 'class-transformer';
import { EventCreateOrConnectWithoutGroupInput } from './event-create-or-connect-without-group.input';
import { EventUpsertWithWhereUniqueWithoutGroupInput } from './event-upsert-with-where-unique-without-group.input';
import { EventCreateManyGroupInputEnvelope } from './event-create-many-group-input-envelope.input';
import { Prisma } from '@prisma/client';
import { EventWhereUniqueInput } from './event-where-unique.input';
import { EventUpdateWithWhereUniqueWithoutGroupInput } from './event-update-with-where-unique-without-group.input';
import { EventUpdateManyWithWhereWithoutGroupInput } from './event-update-many-with-where-without-group.input';
import { EventScalarWhereInput } from './event-scalar-where.input';

@InputType()
export class EventUncheckedUpdateManyWithoutGroupNestedInput {

    @Field(() => [EventCreateWithoutGroupInput], {nullable:true})
    @Type(() => EventCreateWithoutGroupInput)
    create?: Array<EventCreateWithoutGroupInput>;

    @Field(() => [EventCreateOrConnectWithoutGroupInput], {nullable:true})
    @Type(() => EventCreateOrConnectWithoutGroupInput)
    connectOrCreate?: Array<EventCreateOrConnectWithoutGroupInput>;

    @Field(() => [EventUpsertWithWhereUniqueWithoutGroupInput], {nullable:true})
    @Type(() => EventUpsertWithWhereUniqueWithoutGroupInput)
    upsert?: Array<EventUpsertWithWhereUniqueWithoutGroupInput>;

    @Field(() => EventCreateManyGroupInputEnvelope, {nullable:true})
    @Type(() => EventCreateManyGroupInputEnvelope)
    createMany?: EventCreateManyGroupInputEnvelope;

    @Field(() => [EventWhereUniqueInput], {nullable:true})
    @Type(() => EventWhereUniqueInput)
    set?: Array<Prisma.AtLeast<EventWhereUniqueInput, 'id' | 'groupId_name'>>;

    @Field(() => [EventWhereUniqueInput], {nullable:true})
    @Type(() => EventWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<EventWhereUniqueInput, 'id' | 'groupId_name'>>;

    @Field(() => [EventWhereUniqueInput], {nullable:true})
    @Type(() => EventWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<EventWhereUniqueInput, 'id' | 'groupId_name'>>;

    @Field(() => [EventWhereUniqueInput], {nullable:true})
    @Type(() => EventWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<EventWhereUniqueInput, 'id' | 'groupId_name'>>;

    @Field(() => [EventUpdateWithWhereUniqueWithoutGroupInput], {nullable:true})
    @Type(() => EventUpdateWithWhereUniqueWithoutGroupInput)
    update?: Array<EventUpdateWithWhereUniqueWithoutGroupInput>;

    @Field(() => [EventUpdateManyWithWhereWithoutGroupInput], {nullable:true})
    @Type(() => EventUpdateManyWithWhereWithoutGroupInput)
    updateMany?: Array<EventUpdateManyWithWhereWithoutGroupInput>;

    @Field(() => [EventScalarWhereInput], {nullable:true})
    @Type(() => EventScalarWhereInput)
    deleteMany?: Array<EventScalarWhereInput>;
}
