import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { EventApplicationWhereUniqueInput } from './event-application-where-unique.input';
import { Type } from 'class-transformer';
import { EventApplicationUpdateWithoutAccountInput } from './event-application-update-without-account.input';
import { EventApplicationCreateWithoutAccountInput } from './event-application-create-without-account.input';

@InputType()
export class EventApplicationUpsertWithWhereUniqueWithoutAccountInput {

    @Field(() => EventApplicationWhereUniqueInput, {nullable:false})
    @Type(() => EventApplicationWhereUniqueInput)
    where!: Prisma.AtLeast<EventApplicationWhereUniqueInput, 'id'>;

    @Field(() => EventApplicationUpdateWithoutAccountInput, {nullable:false})
    @Type(() => EventApplicationUpdateWithoutAccountInput)
    update!: EventApplicationUpdateWithoutAccountInput;

    @Field(() => EventApplicationCreateWithoutAccountInput, {nullable:false})
    @Type(() => EventApplicationCreateWithoutAccountInput)
    create!: EventApplicationCreateWithoutAccountInput;
}
