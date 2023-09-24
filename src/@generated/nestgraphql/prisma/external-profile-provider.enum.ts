import { registerEnumType } from '@nestjs/graphql';

export enum ExternalProfileProvider {
    GOOGLE = "GOOGLE",
    TELEGRAM = "TELEGRAM"
}


registerEnumType(ExternalProfileProvider, { name: 'ExternalProfileProvider', description: undefined })
