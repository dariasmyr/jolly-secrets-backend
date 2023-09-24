import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AccountCreateWithoutMessagesInput } from './account-create-without-messages.input';
import { Type } from 'class-transformer';
import { AccountCreateOrConnectWithoutMessagesInput } from './account-create-or-connect-without-messages.input';
import { Prisma } from '@prisma/client';
import { AccountWhereUniqueInput } from './account-where-unique.input';

@InputType()
export class AccountCreateNestedOneWithoutMessagesInput {

    @Field(() => AccountCreateWithoutMessagesInput, {nullable:true})
    @Type(() => AccountCreateWithoutMessagesInput)
    create?: AccountCreateWithoutMessagesInput;

    @Field(() => AccountCreateOrConnectWithoutMessagesInput, {nullable:true})
    @Type(() => AccountCreateOrConnectWithoutMessagesInput)
    connectOrCreate?: AccountCreateOrConnectWithoutMessagesInput;

    @Field(() => AccountWhereUniqueInput, {nullable:true})
    @Type(() => AccountWhereUniqueInput)
    connect?: Prisma.AtLeast<AccountWhereUniqueInput, 'id' | 'username'>;
}
