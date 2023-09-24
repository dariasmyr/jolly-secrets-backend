import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { AccountWhereUniqueInput } from './account-where-unique.input';
import { Type } from 'class-transformer';
import { AccountCreateWithoutMessagesInput } from './account-create-without-messages.input';

@InputType()
export class AccountCreateOrConnectWithoutMessagesInput {

    @Field(() => AccountWhereUniqueInput, {nullable:false})
    @Type(() => AccountWhereUniqueInput)
    where!: Prisma.AtLeast<AccountWhereUniqueInput, 'id' | 'username'>;

    @Field(() => AccountCreateWithoutMessagesInput, {nullable:false})
    @Type(() => AccountCreateWithoutMessagesInput)
    create!: AccountCreateWithoutMessagesInput;
}
