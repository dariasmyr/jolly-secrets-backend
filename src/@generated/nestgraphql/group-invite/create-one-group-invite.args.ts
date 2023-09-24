import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GroupInviteCreateInput } from './group-invite-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneGroupInviteArgs {

    @Field(() => GroupInviteCreateInput, {nullable:false})
    @Type(() => GroupInviteCreateInput)
    data!: GroupInviteCreateInput;
}
