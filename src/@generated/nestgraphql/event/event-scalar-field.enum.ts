import { registerEnumType } from '@nestjs/graphql';

export enum EventScalarFieldEnum {
    id = "id",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    pictureUrl = "pictureUrl",
    status = "status",
    groupId = "groupId",
    name = "name",
    description = "description",
    startsAt = "startsAt",
    endsAt = "endsAt"
}


registerEnumType(EventScalarFieldEnum, { name: 'EventScalarFieldEnum', description: undefined })
