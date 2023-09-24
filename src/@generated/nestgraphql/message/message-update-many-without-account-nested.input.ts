import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MessageCreateWithoutAccountInput } from './message-create-without-account.input';
import { Type } from 'class-transformer';
import { MessageCreateOrConnectWithoutAccountInput } from './message-create-or-connect-without-account.input';
import { MessageUpsertWithWhereUniqueWithoutAccountInput } from './message-upsert-with-where-unique-without-account.input';
import { MessageCreateManyAccountInputEnvelope } from './message-create-many-account-input-envelope.input';
import { Prisma } from '@prisma/client';
import { MessageWhereUniqueInput } from './message-where-unique.input';
import { MessageUpdateWithWhereUniqueWithoutAccountInput } from './message-update-with-where-unique-without-account.input';
import { MessageUpdateManyWithWhereWithoutAccountInput } from './message-update-many-with-where-without-account.input';
import { MessageScalarWhereInput } from './message-scalar-where.input';

@InputType()
export class MessageUpdateManyWithoutAccountNestedInput {

    @Field(() => [MessageCreateWithoutAccountInput], {nullable:true})
    @Type(() => MessageCreateWithoutAccountInput)
    create?: Array<MessageCreateWithoutAccountInput>;

    @Field(() => [MessageCreateOrConnectWithoutAccountInput], {nullable:true})
    @Type(() => MessageCreateOrConnectWithoutAccountInput)
    connectOrCreate?: Array<MessageCreateOrConnectWithoutAccountInput>;

    @Field(() => [MessageUpsertWithWhereUniqueWithoutAccountInput], {nullable:true})
    @Type(() => MessageUpsertWithWhereUniqueWithoutAccountInput)
    upsert?: Array<MessageUpsertWithWhereUniqueWithoutAccountInput>;

    @Field(() => MessageCreateManyAccountInputEnvelope, {nullable:true})
    @Type(() => MessageCreateManyAccountInputEnvelope)
    createMany?: MessageCreateManyAccountInputEnvelope;

    @Field(() => [MessageWhereUniqueInput], {nullable:true})
    @Type(() => MessageWhereUniqueInput)
    set?: Array<Prisma.AtLeast<MessageWhereUniqueInput, 'id'>>;

    @Field(() => [MessageWhereUniqueInput], {nullable:true})
    @Type(() => MessageWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<MessageWhereUniqueInput, 'id'>>;

    @Field(() => [MessageWhereUniqueInput], {nullable:true})
    @Type(() => MessageWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<MessageWhereUniqueInput, 'id'>>;

    @Field(() => [MessageWhereUniqueInput], {nullable:true})
    @Type(() => MessageWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<MessageWhereUniqueInput, 'id'>>;

    @Field(() => [MessageUpdateWithWhereUniqueWithoutAccountInput], {nullable:true})
    @Type(() => MessageUpdateWithWhereUniqueWithoutAccountInput)
    update?: Array<MessageUpdateWithWhereUniqueWithoutAccountInput>;

    @Field(() => [MessageUpdateManyWithWhereWithoutAccountInput], {nullable:true})
    @Type(() => MessageUpdateManyWithWhereWithoutAccountInput)
    updateMany?: Array<MessageUpdateManyWithWhereWithoutAccountInput>;

    @Field(() => [MessageScalarWhereInput], {nullable:true})
    @Type(() => MessageScalarWhereInput)
    deleteMany?: Array<MessageScalarWhereInput>;
}
