import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { AccountWhereUniqueInput } from './account-where-unique.input';
import { Type } from 'class-transformer';
import { AccountCreateWithoutNotificationsInput } from './account-create-without-notifications.input';

@InputType()
export class AccountCreateOrConnectWithoutNotificationsInput {

    @Field(() => AccountWhereUniqueInput, {nullable:false})
    @Type(() => AccountWhereUniqueInput)
    where!: Prisma.AtLeast<AccountWhereUniqueInput, 'id' | 'username'>;

    @Field(() => AccountCreateWithoutNotificationsInput, {nullable:false})
    @Type(() => AccountCreateWithoutNotificationsInput)
    create!: AccountCreateWithoutNotificationsInput;
}
