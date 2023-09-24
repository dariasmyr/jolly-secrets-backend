import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AccountCreateWithoutMessagesInput } from './account-create-without-messages.input';
import { Type } from 'class-transformer';
import { AccountCreateOrConnectWithoutMessagesInput } from './account-create-or-connect-without-messages.input';
import { AccountUpsertWithoutMessagesInput } from './account-upsert-without-messages.input';
import { Prisma } from '@prisma/client';
import { AccountWhereUniqueInput } from './account-where-unique.input';
import { AccountUpdateToOneWithWhereWithoutMessagesInput } from './account-update-to-one-with-where-without-messages.input';

@InputType()
export class AccountUpdateOneRequiredWithoutMessagesNestedInput {

    @Field(() => AccountCreateWithoutMessagesInput, {nullable:true})
    @Type(() => AccountCreateWithoutMessagesInput)
    create?: AccountCreateWithoutMessagesInput;

    @Field(() => AccountCreateOrConnectWithoutMessagesInput, {nullable:true})
    @Type(() => AccountCreateOrConnectWithoutMessagesInput)
    connectOrCreate?: AccountCreateOrConnectWithoutMessagesInput;

    @Field(() => AccountUpsertWithoutMessagesInput, {nullable:true})
    @Type(() => AccountUpsertWithoutMessagesInput)
    upsert?: AccountUpsertWithoutMessagesInput;

    @Field(() => AccountWhereUniqueInput, {nullable:true})
    @Type(() => AccountWhereUniqueInput)
    connect?: Prisma.AtLeast<AccountWhereUniqueInput, 'id' | 'username'>;

    @Field(() => AccountUpdateToOneWithWhereWithoutMessagesInput, {nullable:true})
    @Type(() => AccountUpdateToOneWithWhereWithoutMessagesInput)
    update?: AccountUpdateToOneWithWhereWithoutMessagesInput;
}
