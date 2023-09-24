import { registerEnumType } from '@nestjs/graphql';

export enum GroupMemberScalarFieldEnum {
    id = "id",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    groupId = "groupId",
    accountId = "accountId",
    role = "role"
}


registerEnumType(GroupMemberScalarFieldEnum, { name: 'GroupMemberScalarFieldEnum', description: undefined })
