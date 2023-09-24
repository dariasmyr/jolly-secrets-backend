import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GroupUpdateWithoutEventsInput } from './group-update-without-events.input';
import { Type } from 'class-transformer';
import { GroupCreateWithoutEventsInput } from './group-create-without-events.input';
import { GroupWhereInput } from './group-where.input';

@InputType()
export class GroupUpsertWithoutEventsInput {

    @Field(() => GroupUpdateWithoutEventsInput, {nullable:false})
    @Type(() => GroupUpdateWithoutEventsInput)
    update!: GroupUpdateWithoutEventsInput;

    @Field(() => GroupCreateWithoutEventsInput, {nullable:false})
    @Type(() => GroupCreateWithoutEventsInput)
    create!: GroupCreateWithoutEventsInput;

    @Field(() => GroupWhereInput, {nullable:true})
    @Type(() => GroupWhereInput)
    where?: GroupWhereInput;
}
