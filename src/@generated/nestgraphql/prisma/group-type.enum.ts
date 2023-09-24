import { registerEnumType } from '@nestjs/graphql';

export enum GroupType {
    PUBLIC = "PUBLIC",
    PRIVATE = "PRIVATE"
}


registerEnumType(GroupType, { name: 'GroupType', description: undefined })
