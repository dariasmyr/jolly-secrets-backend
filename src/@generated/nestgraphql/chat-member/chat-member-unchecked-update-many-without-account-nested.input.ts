import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChatMemberCreateWithoutAccountInput } from './chat-member-create-without-account.input';
import { Type } from 'class-transformer';
import { ChatMemberCreateOrConnectWithoutAccountInput } from './chat-member-create-or-connect-without-account.input';
import { ChatMemberUpsertWithWhereUniqueWithoutAccountInput } from './chat-member-upsert-with-where-unique-without-account.input';
import { ChatMemberCreateManyAccountInputEnvelope } from './chat-member-create-many-account-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ChatMemberWhereUniqueInput } from './chat-member-where-unique.input';
import { ChatMemberUpdateWithWhereUniqueWithoutAccountInput } from './chat-member-update-with-where-unique-without-account.input';
import { ChatMemberUpdateManyWithWhereWithoutAccountInput } from './chat-member-update-many-with-where-without-account.input';
import { ChatMemberScalarWhereInput } from './chat-member-scalar-where.input';

@InputType()
export class ChatMemberUncheckedUpdateManyWithoutAccountNestedInput {

    @Field(() => [ChatMemberCreateWithoutAccountInput], {nullable:true})
    @Type(() => ChatMemberCreateWithoutAccountInput)
    create?: Array<ChatMemberCreateWithoutAccountInput>;

    @Field(() => [ChatMemberCreateOrConnectWithoutAccountInput], {nullable:true})
    @Type(() => ChatMemberCreateOrConnectWithoutAccountInput)
    connectOrCreate?: Array<ChatMemberCreateOrConnectWithoutAccountInput>;

    @Field(() => [ChatMemberUpsertWithWhereUniqueWithoutAccountInput], {nullable:true})
    @Type(() => ChatMemberUpsertWithWhereUniqueWithoutAccountInput)
    upsert?: Array<ChatMemberUpsertWithWhereUniqueWithoutAccountInput>;

    @Field(() => ChatMemberCreateManyAccountInputEnvelope, {nullable:true})
    @Type(() => ChatMemberCreateManyAccountInputEnvelope)
    createMany?: ChatMemberCreateManyAccountInputEnvelope;

    @Field(() => [ChatMemberWhereUniqueInput], {nullable:true})
    @Type(() => ChatMemberWhereUniqueInput)
    set?: Array<Prisma.AtLeast<ChatMemberWhereUniqueInput, 'id'>>;

    @Field(() => [ChatMemberWhereUniqueInput], {nullable:true})
    @Type(() => ChatMemberWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<ChatMemberWhereUniqueInput, 'id'>>;

    @Field(() => [ChatMemberWhereUniqueInput], {nullable:true})
    @Type(() => ChatMemberWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<ChatMemberWhereUniqueInput, 'id'>>;

    @Field(() => [ChatMemberWhereUniqueInput], {nullable:true})
    @Type(() => ChatMemberWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ChatMemberWhereUniqueInput, 'id'>>;

    @Field(() => [ChatMemberUpdateWithWhereUniqueWithoutAccountInput], {nullable:true})
    @Type(() => ChatMemberUpdateWithWhereUniqueWithoutAccountInput)
    update?: Array<ChatMemberUpdateWithWhereUniqueWithoutAccountInput>;

    @Field(() => [ChatMemberUpdateManyWithWhereWithoutAccountInput], {nullable:true})
    @Type(() => ChatMemberUpdateManyWithWhereWithoutAccountInput)
    updateMany?: Array<ChatMemberUpdateManyWithWhereWithoutAccountInput>;

    @Field(() => [ChatMemberScalarWhereInput], {nullable:true})
    @Type(() => ChatMemberScalarWhereInput)
    deleteMany?: Array<ChatMemberScalarWhereInput>;
}
