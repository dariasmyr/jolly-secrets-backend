import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AccountCreateWithoutNotificationsInput } from './account-create-without-notifications.input';
import { Type } from 'class-transformer';
import { AccountCreateOrConnectWithoutNotificationsInput } from './account-create-or-connect-without-notifications.input';
import { Prisma } from '@prisma/client';
import { AccountWhereUniqueInput } from './account-where-unique.input';

@InputType()
export class AccountCreateNestedOneWithoutNotificationsInput {

    @Field(() => AccountCreateWithoutNotificationsInput, {nullable:true})
    @Type(() => AccountCreateWithoutNotificationsInput)
    create?: AccountCreateWithoutNotificationsInput;

    @Field(() => AccountCreateOrConnectWithoutNotificationsInput, {nullable:true})
    @Type(() => AccountCreateOrConnectWithoutNotificationsInput)
    connectOrCreate?: AccountCreateOrConnectWithoutNotificationsInput;

    @Field(() => AccountWhereUniqueInput, {nullable:true})
    @Type(() => AccountWhereUniqueInput)
    connect?: Prisma.AtLeast<AccountWhereUniqueInput, 'id' | 'username'>;
}
