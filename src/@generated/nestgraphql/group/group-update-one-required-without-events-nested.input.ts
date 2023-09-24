import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GroupCreateWithoutEventsInput } from './group-create-without-events.input';
import { Type } from 'class-transformer';
import { GroupCreateOrConnectWithoutEventsInput } from './group-create-or-connect-without-events.input';
import { GroupUpsertWithoutEventsInput } from './group-upsert-without-events.input';
import { Prisma } from '@prisma/client';
import { GroupWhereUniqueInput } from './group-where-unique.input';
import { GroupUpdateToOneWithWhereWithoutEventsInput } from './group-update-to-one-with-where-without-events.input';

@InputType()
export class GroupUpdateOneRequiredWithoutEventsNestedInput {

    @Field(() => GroupCreateWithoutEventsInput, {nullable:true})
    @Type(() => GroupCreateWithoutEventsInput)
    create?: GroupCreateWithoutEventsInput;

    @Field(() => GroupCreateOrConnectWithoutEventsInput, {nullable:true})
    @Type(() => GroupCreateOrConnectWithoutEventsInput)
    connectOrCreate?: GroupCreateOrConnectWithoutEventsInput;

    @Field(() => GroupUpsertWithoutEventsInput, {nullable:true})
    @Type(() => GroupUpsertWithoutEventsInput)
    upsert?: GroupUpsertWithoutEventsInput;

    @Field(() => GroupWhereUniqueInput, {nullable:true})
    @Type(() => GroupWhereUniqueInput)
    connect?: Prisma.AtLeast<GroupWhereUniqueInput, 'id' | 'name'>;

    @Field(() => GroupUpdateToOneWithWhereWithoutEventsInput, {nullable:true})
    @Type(() => GroupUpdateToOneWithWhereWithoutEventsInput)
    update?: GroupUpdateToOneWithWhereWithoutEventsInput;
}
