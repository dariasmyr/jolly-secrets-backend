import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GroupCreateNestedOneWithoutGroupInvitesInput } from '../group/group-create-nested-one-without-group-invites.input';

@InputType()
export class GroupInviteCreateInput {

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => String, {nullable:false})
    code!: string;

    @Field(() => GroupCreateNestedOneWithoutGroupInvitesInput, {nullable:false})
    group!: GroupCreateNestedOneWithoutGroupInvitesInput;
}
