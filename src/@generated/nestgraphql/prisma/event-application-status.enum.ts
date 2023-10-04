import { registerEnumType } from '@nestjs/graphql';

export enum EventApplicationStatus {
    LOOKING_FOR_PAIR = "LOOKING_FOR_PAIR",
    PAIRED = "PAIRED",
    GIFT_SENT = "GIFT_SENT",
    GIFT_RECEIVED = "GIFT_RECEIVED",
    GIFT_NOT_RECEIVED = "GIFT_NOT_RECEIVED"
}


registerEnumType(EventApplicationStatus, { name: 'EventApplicationStatus', description: undefined })
