import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChatMemberRole } from './chat-member-role.enum';

@InputType()
export class NestedEnumChatMemberRoleFilter {

    @Field(() => ChatMemberRole, {nullable:true})
    equals?: keyof typeof ChatMemberRole;

    @Field(() => [ChatMemberRole], {nullable:true})
    in?: Array<keyof typeof ChatMemberRole>;

    @Field(() => [ChatMemberRole], {nullable:true})
    notIn?: Array<keyof typeof ChatMemberRole>;

    @Field(() => NestedEnumChatMemberRoleFilter, {nullable:true})
    not?: NestedEnumChatMemberRoleFilter;
}
