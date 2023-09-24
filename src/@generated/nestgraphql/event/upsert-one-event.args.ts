import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { EventWhereUniqueInput } from './event-where-unique.input';
import { Type } from 'class-transformer';
import { EventCreateInput } from './event-create.input';
import { EventUpdateInput } from './event-update.input';

@ArgsType()
export class UpsertOneEventArgs {

    @Field(() => EventWhereUniqueInput, {nullable:false})
    @Type(() => EventWhereUniqueInput)
    where!: Prisma.AtLeast<EventWhereUniqueInput, 'id' | 'groupId_name'>;

    @Field(() => EventCreateInput, {nullable:false})
    @Type(() => EventCreateInput)
    create!: EventCreateInput;

    @Field(() => EventUpdateInput, {nullable:false})
    @Type(() => EventUpdateInput)
    update!: EventUpdateInput;
}
