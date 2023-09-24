import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GroupInviteScalarWhereInput } from './group-invite-scalar-where.input';
import { Type } from 'class-transformer';
import { GroupInviteUpdateManyMutationInput } from './group-invite-update-many-mutation.input';

@InputType()
export class GroupInviteUpdateManyWithWhereWithoutGroupInput {

    @Field(() => GroupInviteScalarWhereInput, {nullable:false})
    @Type(() => GroupInviteScalarWhereInput)
    where!: GroupInviteScalarWhereInput;

    @Field(() => GroupInviteUpdateManyMutationInput, {nullable:false})
    @Type(() => GroupInviteUpdateManyMutationInput)
    data!: GroupInviteUpdateManyMutationInput;
}
