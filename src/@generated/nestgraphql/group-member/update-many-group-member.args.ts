import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GroupMemberUpdateManyMutationInput } from './group-member-update-many-mutation.input';
import { Type } from 'class-transformer';
import { GroupMemberWhereInput } from './group-member-where.input';

@ArgsType()
export class UpdateManyGroupMemberArgs {

    @Field(() => GroupMemberUpdateManyMutationInput, {nullable:false})
    @Type(() => GroupMemberUpdateManyMutationInput)
    data!: GroupMemberUpdateManyMutationInput;

    @Field(() => GroupMemberWhereInput, {nullable:true})
    @Type(() => GroupMemberWhereInput)
    where?: GroupMemberWhereInput;
}
