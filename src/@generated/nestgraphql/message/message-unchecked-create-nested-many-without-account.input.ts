import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MessageCreateWithoutAccountInput } from './message-create-without-account.input';
import { Type } from 'class-transformer';
import { MessageCreateOrConnectWithoutAccountInput } from './message-create-or-connect-without-account.input';
import { MessageCreateManyAccountInputEnvelope } from './message-create-many-account-input-envelope.input';
import { Prisma } from '@prisma/client';
import { MessageWhereUniqueInput } from './message-where-unique.input';

@InputType()
export class MessageUncheckedCreateNestedManyWithoutAccountInput {

    @Field(() => [MessageCreateWithoutAccountInput], {nullable:true})
    @Type(() => MessageCreateWithoutAccountInput)
    create?: Array<MessageCreateWithoutAccountInput>;

    @Field(() => [MessageCreateOrConnectWithoutAccountInput], {nullable:true})
    @Type(() => MessageCreateOrConnectWithoutAccountInput)
    connectOrCreate?: Array<MessageCreateOrConnectWithoutAccountInput>;

    @Field(() => MessageCreateManyAccountInputEnvelope, {nullable:true})
    @Type(() => MessageCreateManyAccountInputEnvelope)
    createMany?: MessageCreateManyAccountInputEnvelope;

    @Field(() => [MessageWhereUniqueInput], {nullable:true})
    @Type(() => MessageWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<MessageWhereUniqueInput, 'id'>>;
}
