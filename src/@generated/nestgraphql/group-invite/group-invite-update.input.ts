import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GroupUpdateOneRequiredWithoutGroupInvitesNestedInput } from '../group/group-update-one-required-without-group-invites-nested.input';

@InputType()
export class GroupInviteUpdateInput {

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => String, {nullable:true})
    code?: string;

    @Field(() => GroupUpdateOneRequiredWithoutGroupInvitesNestedInput, {nullable:true})
    group?: GroupUpdateOneRequiredWithoutGroupInvitesNestedInput;
}
