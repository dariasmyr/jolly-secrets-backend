import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GroupMemberScalarWhereInput } from './group-member-scalar-where.input';
import { Type } from 'class-transformer';
import { GroupMemberUpdateManyMutationInput } from './group-member-update-many-mutation.input';

@InputType()
export class GroupMemberUpdateManyWithWhereWithoutGroupInput {

    @Field(() => GroupMemberScalarWhereInput, {nullable:false})
    @Type(() => GroupMemberScalarWhereInput)
    where!: GroupMemberScalarWhereInput;

    @Field(() => GroupMemberUpdateManyMutationInput, {nullable:false})
    @Type(() => GroupMemberUpdateManyMutationInput)
    data!: GroupMemberUpdateManyMutationInput;
}
