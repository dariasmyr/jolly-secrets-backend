import { registerEnumType } from '@nestjs/graphql';

export enum EventApplicationPairScalarFieldEnum {
    id = "id",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    eventId = "eventId",
    eventApplicationFirstId = "eventApplicationFirstId",
    eventApplicationSecondId = "eventApplicationSecondId"
}


registerEnumType(EventApplicationPairScalarFieldEnum, { name: 'EventApplicationPairScalarFieldEnum', description: undefined })
