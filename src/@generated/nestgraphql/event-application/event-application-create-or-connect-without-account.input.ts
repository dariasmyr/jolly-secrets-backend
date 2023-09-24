import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { EventApplicationWhereUniqueInput } from './event-application-where-unique.input';
import { Type } from 'class-transformer';
import { EventApplicationCreateWithoutAccountInput } from './event-application-create-without-account.input';

@InputType()
export class EventApplicationCreateOrConnectWithoutAccountInput {

    @Field(() => EventApplicationWhereUniqueInput, {nullable:false})
    @Type(() => EventApplicationWhereUniqueInput)
    where!: Prisma.AtLeast<EventApplicationWhereUniqueInput, 'id'>;

    @Field(() => EventApplicationCreateWithoutAccountInput, {nullable:false})
    @Type(() => EventApplicationCreateWithoutAccountInput)
    create!: EventApplicationCreateWithoutAccountInput;
}
