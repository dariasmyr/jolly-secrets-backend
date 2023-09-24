import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AccountWhereInput } from './account-where.input';
import { Type } from 'class-transformer';
import { AccountUpdateWithoutNotificationsInput } from './account-update-without-notifications.input';

@InputType()
export class AccountUpdateToOneWithWhereWithoutNotificationsInput {

    @Field(() => AccountWhereInput, {nullable:true})
    @Type(() => AccountWhereInput)
    where?: AccountWhereInput;

    @Field(() => AccountUpdateWithoutNotificationsInput, {nullable:false})
    @Type(() => AccountUpdateWithoutNotificationsInput)
    data!: AccountUpdateWithoutNotificationsInput;
}
