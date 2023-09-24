import { registerEnumType } from '@nestjs/graphql';

export enum ChatMemberScalarFieldEnum {
    id = "id",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    accountId = "accountId",
    chatId = "chatId",
    role = "role"
}


registerEnumType(ChatMemberScalarFieldEnum, { name: 'ChatMemberScalarFieldEnum', description: undefined })
