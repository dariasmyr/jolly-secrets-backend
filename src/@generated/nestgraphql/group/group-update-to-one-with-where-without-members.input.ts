import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GroupWhereInput } from './group-where.input';
import { Type } from 'class-transformer';
import { GroupUpdateWithoutMembersInput } from './group-update-without-members.input';

@InputType()
export class GroupUpdateToOneWithWhereWithoutMembersInput {

    @Field(() => GroupWhereInput, {nullable:true})
    @Type(() => GroupWhereInput)
    where?: GroupWhereInput;

    @Field(() => GroupUpdateWithoutMembersInput, {nullable:false})
    @Type(() => GroupUpdateWithoutMembersInput)
    data!: GroupUpdateWithoutMembersInput;
}
