import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ChatMemberWhereUniqueInput } from './chat-member-where-unique.input';
import { Type } from 'class-transformer';
import { ChatMemberUpdateWithoutAccountInput } from './chat-member-update-without-account.input';
import { ChatMemberCreateWithoutAccountInput } from './chat-member-create-without-account.input';

@InputType()
export class ChatMemberUpsertWithWhereUniqueWithoutAccountInput {

    @Field(() => ChatMemberWhereUniqueInput, {nullable:false})
    @Type(() => ChatMemberWhereUniqueInput)
    where!: Prisma.AtLeast<ChatMemberWhereUniqueInput, 'id'>;

    @Field(() => ChatMemberUpdateWithoutAccountInput, {nullable:false})
    @Type(() => ChatMemberUpdateWithoutAccountInput)
    update!: ChatMemberUpdateWithoutAccountInput;

    @Field(() => ChatMemberCreateWithoutAccountInput, {nullable:false})
    @Type(() => ChatMemberCreateWithoutAccountInput)
    create!: ChatMemberCreateWithoutAccountInput;
}
