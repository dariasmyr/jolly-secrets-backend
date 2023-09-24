import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventApplicationCreateWithoutAccountInput } from './event-application-create-without-account.input';
import { Type } from 'class-transformer';
import { EventApplicationCreateOrConnectWithoutAccountInput } from './event-application-create-or-connect-without-account.input';
import { EventApplicationCreateManyAccountInputEnvelope } from './event-application-create-many-account-input-envelope.input';
import { Prisma } from '@prisma/client';
import { EventApplicationWhereUniqueInput } from './event-application-where-unique.input';

@InputType()
export class EventApplicationUncheckedCreateNestedManyWithoutAccountInput {

    @Field(() => [EventApplicationCreateWithoutAccountInput], {nullable:true})
    @Type(() => EventApplicationCreateWithoutAccountInput)
    create?: Array<EventApplicationCreateWithoutAccountInput>;

    @Field(() => [EventApplicationCreateOrConnectWithoutAccountInput], {nullable:true})
    @Type(() => EventApplicationCreateOrConnectWithoutAccountInput)
    connectOrCreate?: Array<EventApplicationCreateOrConnectWithoutAccountInput>;

    @Field(() => EventApplicationCreateManyAccountInputEnvelope, {nullable:true})
    @Type(() => EventApplicationCreateManyAccountInputEnvelope)
    createMany?: EventApplicationCreateManyAccountInputEnvelope;

    @Field(() => [EventApplicationWhereUniqueInput], {nullable:true})
    @Type(() => EventApplicationWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<EventApplicationWhereUniqueInput, 'id'>>;
}
