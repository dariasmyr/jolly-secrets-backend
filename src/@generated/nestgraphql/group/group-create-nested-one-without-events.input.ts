import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GroupCreateWithoutEventsInput } from './group-create-without-events.input';
import { Type } from 'class-transformer';
import { GroupCreateOrConnectWithoutEventsInput } from './group-create-or-connect-without-events.input';
import { Prisma } from '@prisma/client';
import { GroupWhereUniqueInput } from './group-where-unique.input';

@InputType()
export class GroupCreateNestedOneWithoutEventsInput {

    @Field(() => GroupCreateWithoutEventsInput, {nullable:true})
    @Type(() => GroupCreateWithoutEventsInput)
    create?: GroupCreateWithoutEventsInput;

    @Field(() => GroupCreateOrConnectWithoutEventsInput, {nullable:true})
    @Type(() => GroupCreateOrConnectWithoutEventsInput)
    connectOrCreate?: GroupCreateOrConnectWithoutEventsInput;

    @Field(() => GroupWhereUniqueInput, {nullable:true})
    @Type(() => GroupWhereUniqueInput)
    connect?: Prisma.AtLeast<GroupWhereUniqueInput, 'id' | 'name'>;
}
