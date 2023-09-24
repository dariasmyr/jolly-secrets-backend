import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GroupWhereInput } from './group-where.input';
import { Type } from 'class-transformer';
import { GroupUpdateWithoutEventsInput } from './group-update-without-events.input';

@InputType()
export class GroupUpdateToOneWithWhereWithoutEventsInput {

    @Field(() => GroupWhereInput, {nullable:true})
    @Type(() => GroupWhereInput)
    where?: GroupWhereInput;

    @Field(() => GroupUpdateWithoutEventsInput, {nullable:false})
    @Type(() => GroupUpdateWithoutEventsInput)
    data!: GroupUpdateWithoutEventsInput;
}
