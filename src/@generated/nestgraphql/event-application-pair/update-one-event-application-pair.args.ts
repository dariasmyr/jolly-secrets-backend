import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EventApplicationPairUpdateInput } from './event-application-pair-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { EventApplicationPairWhereUniqueInput } from './event-application-pair-where-unique.input';

@ArgsType()
export class UpdateOneEventApplicationPairArgs {

    @Field(() => EventApplicationPairUpdateInput, {nullable:false})
    @Type(() => EventApplicationPairUpdateInput)
    data!: EventApplicationPairUpdateInput;

    @Field(() => EventApplicationPairWhereUniqueInput, {nullable:false})
    @Type(() => EventApplicationPairWhereUniqueInput)
    where!: Prisma.AtLeast<EventApplicationPairWhereUniqueInput, 'id'>;
}
