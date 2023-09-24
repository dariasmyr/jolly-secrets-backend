import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { GroupWhereUniqueInput } from './group-where-unique.input';
import { Type } from 'class-transformer';
import { GroupCreateWithoutEventsInput } from './group-create-without-events.input';

@InputType()
export class GroupCreateOrConnectWithoutEventsInput {

    @Field(() => GroupWhereUniqueInput, {nullable:false})
    @Type(() => GroupWhereUniqueInput)
    where!: Prisma.AtLeast<GroupWhereUniqueInput, 'id' | 'name'>;

    @Field(() => GroupCreateWithoutEventsInput, {nullable:false})
    @Type(() => GroupCreateWithoutEventsInput)
    create!: GroupCreateWithoutEventsInput;
}
