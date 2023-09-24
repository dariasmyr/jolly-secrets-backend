import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GroupInviteWhereInput } from './group-invite-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyGroupInviteArgs {

    @Field(() => GroupInviteWhereInput, {nullable:true})
    @Type(() => GroupInviteWhereInput)
    where?: GroupInviteWhereInput;
}
