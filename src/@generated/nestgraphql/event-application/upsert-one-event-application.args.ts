import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { EventApplicationWhereUniqueInput } from './event-application-where-unique.input';
import { Type } from 'class-transformer';
import { EventApplicationCreateInput } from './event-application-create.input';
import { EventApplicationUpdateInput } from './event-application-update.input';

@ArgsType()
export class UpsertOneEventApplicationArgs {

    @Field(() => EventApplicationWhereUniqueInput, {nullable:false})
    @Type(() => EventApplicationWhereUniqueInput)
    where!: Prisma.AtLeast<EventApplicationWhereUniqueInput, 'id'>;

    @Field(() => EventApplicationCreateInput, {nullable:false})
    @Type(() => EventApplicationCreateInput)
    create!: EventApplicationCreateInput;

    @Field(() => EventApplicationUpdateInput, {nullable:false})
    @Type(() => EventApplicationUpdateInput)
    update!: EventApplicationUpdateInput;
}
