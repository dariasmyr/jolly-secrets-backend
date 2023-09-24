import { registerEnumType } from '@nestjs/graphql';

export enum PreferenceScalarFieldEnum {
    id = "id",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    priceRange = "priceRange",
    likes = "likes",
    dislikes = "dislikes",
    comment = "comment",
    applicationId = "applicationId"
}


registerEnumType(PreferenceScalarFieldEnum, { name: 'PreferenceScalarFieldEnum', description: undefined })
