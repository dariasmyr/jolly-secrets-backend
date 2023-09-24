import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChatMemberRole } from './chat-member-role.enum';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumChatMemberRoleFilter } from './nested-enum-chat-member-role-filter.input';

@InputType()
export class NestedEnumChatMemberRoleWithAggregatesFilter {

    @Field(() => ChatMemberRole, {nullable:true})
    equals?: keyof typeof ChatMemberRole;

    @Field(() => [ChatMemberRole], {nullable:true})
    in?: Array<keyof typeof ChatMemberRole>;

    @Field(() => [ChatMemberRole], {nullable:true})
    notIn?: Array<keyof typeof ChatMemberRole>;

    @Field(() => NestedEnumChatMemberRoleWithAggregatesFilter, {nullable:true})
    not?: NestedEnumChatMemberRoleWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumChatMemberRoleFilter, {nullable:true})
    _min?: NestedEnumChatMemberRoleFilter;

    @Field(() => NestedEnumChatMemberRoleFilter, {nullable:true})
    _max?: NestedEnumChatMemberRoleFilter;
}
