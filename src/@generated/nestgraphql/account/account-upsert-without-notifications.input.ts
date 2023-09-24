import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AccountUpdateWithoutNotificationsInput } from './account-update-without-notifications.input';
import { Type } from 'class-transformer';
import { AccountCreateWithoutNotificationsInput } from './account-create-without-notifications.input';
import { AccountWhereInput } from './account-where.input';

@InputType()
export class AccountUpsertWithoutNotificationsInput {

    @Field(() => AccountUpdateWithoutNotificationsInput, {nullable:false})
    @Type(() => AccountUpdateWithoutNotificationsInput)
    update!: AccountUpdateWithoutNotificationsInput;

    @Field(() => AccountCreateWithoutNotificationsInput, {nullable:false})
    @Type(() => AccountCreateWithoutNotificationsInput)
    create!: AccountCreateWithoutNotificationsInput;

    @Field(() => AccountWhereInput, {nullable:true})
    @Type(() => AccountWhereInput)
    where?: AccountWhereInput;
}
