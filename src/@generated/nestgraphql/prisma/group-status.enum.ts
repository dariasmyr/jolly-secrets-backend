import { registerEnumType } from '@nestjs/graphql';

export enum GroupStatus {
    OPEN = "OPEN",
    CLOSED = "CLOSED"
}


registerEnumType(GroupStatus, { name: 'GroupStatus', description: undefined })
