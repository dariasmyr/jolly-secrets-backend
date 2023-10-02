import { registerEnumType } from '@nestjs/graphql';

export enum EventStatus {
    OPEN = "OPEN",
    EXPIRED = "EXPIRED",
    CLOSED = "CLOSED"
}


registerEnumType(EventStatus, { name: 'EventStatus', description: undefined })
