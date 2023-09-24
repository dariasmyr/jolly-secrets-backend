import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GroupMemberCreateInput } from './group-member-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneGroupMemberArgs {

    @Field(() => GroupMemberCreateInput, {nullable:false})
    @Type(() => GroupMemberCreateInput)
    data!: GroupMemberCreateInput;
}
