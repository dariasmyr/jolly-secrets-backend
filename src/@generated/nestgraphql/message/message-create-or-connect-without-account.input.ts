import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { MessageWhereUniqueInput } from './message-where-unique.input';
import { Type } from 'class-transformer';
import { MessageCreateWithoutAccountInput } from './message-create-without-account.input';

@InputType()
export class MessageCreateOrConnectWithoutAccountInput {

    @Field(() => MessageWhereUniqueInput, {nullable:false})
    @Type(() => MessageWhereUniqueInput)
    where!: Prisma.AtLeast<MessageWhereUniqueInput, 'id'>;

    @Field(() => MessageCreateWithoutAccountInput, {nullable:false})
    @Type(() => MessageCreateWithoutAccountInput)
    create!: MessageCreateWithoutAccountInput;
}
