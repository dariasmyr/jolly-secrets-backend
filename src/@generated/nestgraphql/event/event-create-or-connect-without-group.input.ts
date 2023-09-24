import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { EventWhereUniqueInput } from './event-where-unique.input';
import { Type } from 'class-transformer';
import { EventCreateWithoutGroupInput } from './event-create-without-group.input';

@InputType()
export class EventCreateOrConnectWithoutGroupInput {

    @Field(() => EventWhereUniqueInput, {nullable:false})
    @Type(() => EventWhereUniqueInput)
    where!: Prisma.AtLeast<EventWhereUniqueInput, 'id' | 'groupId_name'>;

    @Field(() => EventCreateWithoutGroupInput, {nullable:false})
    @Type(() => EventCreateWithoutGroupInput)
    create!: EventCreateWithoutGroupInput;
}
