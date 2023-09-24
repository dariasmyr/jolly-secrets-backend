import { registerEnumType } from '@nestjs/graphql';

export enum ChatMemberRole {
    ADMIN = "ADMIN",
    MEMBER = "MEMBER"
}


registerEnumType(ChatMemberRole, { name: 'ChatMemberRole', description: undefined })
