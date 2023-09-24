import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AccountCreateWithoutNotificationsInput } from './account-create-without-notifications.input';
import { Type } from 'class-transformer';
import { AccountCreateOrConnectWithoutNotificationsInput } from './account-create-or-connect-without-notifications.input';
import { AccountUpsertWithoutNotificationsInput } from './account-upsert-without-notifications.input';
import { Prisma } from '@prisma/client';
import { AccountWhereUniqueInput } from './account-where-unique.input';
import { AccountUpdateToOneWithWhereWithoutNotificationsInput } from './account-update-to-one-with-where-without-notifications.input';

@InputType()
export class AccountUpdateOneRequiredWithoutNotificationsNestedInput {

    @Field(() => AccountCreateWithoutNotificationsInput, {nullable:true})
    @Type(() => AccountCreateWithoutNotificationsInput)
    create?: AccountCreateWithoutNotificationsInput;

    @Field(() => AccountCreateOrConnectWithoutNotificationsInput, {nullable:true})
    @Type(() => AccountCreateOrConnectWithoutNotificationsInput)
    connectOrCreate?: AccountCreateOrConnectWithoutNotificationsInput;

    @Field(() => AccountUpsertWithoutNotificationsInput, {nullable:true})
    @Type(() => AccountUpsertWithoutNotificationsInput)
    upsert?: AccountUpsertWithoutNotificationsInput;

    @Field(() => AccountWhereUniqueInput, {nullable:true})
    @Type(() => AccountWhereUniqueInput)
    connect?: Prisma.AtLeast<AccountWhereUniqueInput, 'id' | 'username'>;

    @Field(() => AccountUpdateToOneWithWhereWithoutNotificationsInput, {nullable:true})
    @Type(() => AccountUpdateToOneWithWhereWithoutNotificationsInput)
    update?: AccountUpdateToOneWithWhereWithoutNotificationsInput;
}
