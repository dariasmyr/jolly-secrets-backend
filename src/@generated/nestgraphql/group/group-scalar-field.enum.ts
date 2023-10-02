import { registerEnumType } from '@nestjs/graphql';

export enum GroupScalarFieldEnum {
    id = "id",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    pictureUrl = "pictureUrl",
    name = "name",
    description = "description",
    type = "type",
    status = "status"
}


registerEnumType(GroupScalarFieldEnum, { name: 'GroupScalarFieldEnum', description: undefined })
