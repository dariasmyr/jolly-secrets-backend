import { registerEnumType } from '@nestjs/graphql';

export enum GroupInviteScalarFieldEnum {
    id = "id",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    groupId = "groupId",
    code = "code"
}


registerEnumType(GroupInviteScalarFieldEnum, { name: 'GroupInviteScalarFieldEnum', description: undefined })
