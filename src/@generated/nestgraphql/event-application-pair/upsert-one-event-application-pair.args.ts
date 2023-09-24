import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { EventApplicationPairWhereUniqueInput } from './event-application-pair-where-unique.input';
import { Type } from 'class-transformer';
import { EventApplicationPairCreateInput } from './event-application-pair-create.input';
import { EventApplicationPairUpdateInput } from './event-application-pair-update.input';

@ArgsType()
export class UpsertOneEventApplicationPairArgs {

    @Field(() => EventApplicationPairWhereUniqueInput, {nullable:false})
    @Type(() => EventApplicationPairWhereUniqueInput)
    where!: Prisma.AtLeast<EventApplicationPairWhereUniqueInput, 'id'>;

    @Field(() => EventApplicationPairCreateInput, {nullable:false})
    @Type(() => EventApplicationPairCreateInput)
    create!: EventApplicationPairCreateInput;

    @Field(() => EventApplicationPairUpdateInput, {nullable:false})
    @Type(() => EventApplicationPairUpdateInput)
    update!: EventApplicationPairUpdateInput;
}
