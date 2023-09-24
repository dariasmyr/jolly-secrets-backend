import { registerEnumType } from '@nestjs/graphql';

export enum ExternalProfileScalarFieldEnum {
    id = "id",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    provider = "provider",
    externalId = "externalId",
    accountId = "accountId"
}


registerEnumType(ExternalProfileScalarFieldEnum, { name: 'ExternalProfileScalarFieldEnum', description: undefined })
