import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventApplicationCreateWithoutAccountInput } from './event-application-create-without-account.input';
import { Type } from 'class-transformer';
import { EventApplicationCreateOrConnectWithoutAccountInput } from './event-application-create-or-connect-without-account.input';
import { EventApplicationUpsertWithWhereUniqueWithoutAccountInput } from './event-application-upsert-with-where-unique-without-account.input';
import { EventApplicationCreateManyAccountInputEnvelope } from './event-application-create-many-account-input-envelope.input';
import { Prisma } from '@prisma/client';
import { EventApplicationWhereUniqueInput } from './event-application-where-unique.input';
import { EventApplicationUpdateWithWhereUniqueWithoutAccountInput } from './event-application-update-with-where-unique-without-account.input';
import { EventApplicationUpdateManyWithWhereWithoutAccountInput } from './event-application-update-many-with-where-without-account.input';
import { EventApplicationScalarWhereInput } from './event-application-scalar-where.input';

@InputType()
export class EventApplicationUpdateManyWithoutAccountNestedInput {

    @Field(() => [EventApplicationCreateWithoutAccountInput], {nullable:true})
    @Type(() => EventApplicationCreateWithoutAccountInput)
    create?: Array<EventApplicationCreateWithoutAccountInput>;

    @Field(() => [EventApplicationCreateOrConnectWithoutAccountInput], {nullable:true})
    @Type(() => EventApplicationCreateOrConnectWithoutAccountInput)
    connectOrCreate?: Array<EventApplicationCreateOrConnectWithoutAccountInput>;

    @Field(() => [EventApplicationUpsertWithWhereUniqueWithoutAccountInput], {nullable:true})
    @Type(() => EventApplicationUpsertWithWhereUniqueWithoutAccountInput)
    upsert?: Array<EventApplicationUpsertWithWhereUniqueWithoutAccountInput>;

    @Field(() => EventApplicationCreateManyAccountInputEnvelope, {nullable:true})
    @Type(() => EventApplicationCreateManyAccountInputEnvelope)
    createMany?: EventApplicationCreateManyAccountInputEnvelope;

    @Field(() => [EventApplicationWhereUniqueInput], {nullable:true})
    @Type(() => EventApplicationWhereUniqueInput)
    set?: Array<Prisma.AtLeast<EventApplicationWhereUniqueInput, 'id'>>;

    @Field(() => [EventApplicationWhereUniqueInput], {nullable:true})
    @Type(() => EventApplicationWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<EventApplicationWhereUniqueInput, 'id'>>;

    @Field(() => [EventApplicationWhereUniqueInput], {nullable:true})
    @Type(() => EventApplicationWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<EventApplicationWhereUniqueInput, 'id'>>;

    @Field(() => [EventApplicationWhereUniqueInput], {nullable:true})
    @Type(() => EventApplicationWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<EventApplicationWhereUniqueInput, 'id'>>;

    @Field(() => [EventApplicationUpdateWithWhereUniqueWithoutAccountInput], {nullable:true})
    @Type(() => EventApplicationUpdateWithWhereUniqueWithoutAccountInput)
    update?: Array<EventApplicationUpdateWithWhereUniqueWithoutAccountInput>;

    @Field(() => [EventApplicationUpdateManyWithWhereWithoutAccountInput], {nullable:true})
    @Type(() => EventApplicationUpdateManyWithWhereWithoutAccountInput)
    updateMany?: Array<EventApplicationUpdateManyWithWhereWithoutAccountInput>;

    @Field(() => [EventApplicationScalarWhereInput], {nullable:true})
    @Type(() => EventApplicationScalarWhereInput)
    deleteMany?: Array<EventApplicationScalarWhereInput>;
}
