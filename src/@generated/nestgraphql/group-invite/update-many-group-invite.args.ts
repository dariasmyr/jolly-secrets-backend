import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GroupInviteUpdateManyMutationInput } from './group-invite-update-many-mutation.input';
import { Type } from 'class-transformer';
import { GroupInviteWhereInput } from './group-invite-where.input';

@ArgsType()
export class UpdateManyGroupInviteArgs {

    @Field(() => GroupInviteUpdateManyMutationInput, {nullable:false})
    @Type(() => GroupInviteUpdateManyMutationInput)
    data!: GroupInviteUpdateManyMutationInput;

    @Field(() => GroupInviteWhereInput, {nullable:true})
    @Type(() => GroupInviteWhereInput)
    where?: GroupInviteWhereInput;
}
