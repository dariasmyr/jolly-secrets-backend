import { registerEnumType } from '@nestjs/graphql';

export enum EventApplicationScalarFieldEnum {
    id = "id",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    accountId = "accountId",
    status = "status"
}


registerEnumType(EventApplicationScalarFieldEnum, { name: 'EventApplicationScalarFieldEnum', description: undefined })
