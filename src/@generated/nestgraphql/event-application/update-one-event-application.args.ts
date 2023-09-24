import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EventApplicationUpdateInput } from './event-application-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { EventApplicationWhereUniqueInput } from './event-application-where-unique.input';

@ArgsType()
export class UpdateOneEventApplicationArgs {

    @Field(() => EventApplicationUpdateInput, {nullable:false})
    @Type(() => EventApplicationUpdateInput)
    data!: EventApplicationUpdateInput;

    @Field(() => EventApplicationWhereUniqueInput, {nullable:false})
    @Type(() => EventApplicationWhereUniqueInput)
    where!: Prisma.AtLeast<EventApplicationWhereUniqueInput, 'id'>;
}
