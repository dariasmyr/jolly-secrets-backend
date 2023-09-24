import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChatMemberCreateWithoutAccountInput } from './chat-member-create-without-account.input';
import { Type } from 'class-transformer';
import { ChatMemberCreateOrConnectWithoutAccountInput } from './chat-member-create-or-connect-without-account.input';
import { ChatMemberCreateManyAccountInputEnvelope } from './chat-member-create-many-account-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ChatMemberWhereUniqueInput } from './chat-member-where-unique.input';

@InputType()
export class ChatMemberUncheckedCreateNestedManyWithoutAccountInput {

    @Field(() => [ChatMemberCreateWithoutAccountInput], {nullable:true})
    @Type(() => ChatMemberCreateWithoutAccountInput)
    create?: Array<ChatMemberCreateWithoutAccountInput>;

    @Field(() => [ChatMemberCreateOrConnectWithoutAccountInput], {nullable:true})
    @Type(() => ChatMemberCreateOrConnectWithoutAccountInput)
    connectOrCreate?: Array<ChatMemberCreateOrConnectWithoutAccountInput>;

    @Field(() => ChatMemberCreateManyAccountInputEnvelope, {nullable:true})
    @Type(() => ChatMemberCreateManyAccountInputEnvelope)
    createMany?: ChatMemberCreateManyAccountInputEnvelope;

    @Field(() => [ChatMemberWhereUniqueInput], {nullable:true})
    @Type(() => ChatMemberWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ChatMemberWhereUniqueInput, 'id'>>;
}
