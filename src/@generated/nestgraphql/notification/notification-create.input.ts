import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AccountCreateNestedOneWithoutNotificationsInput } from '../account/account-create-nested-one-without-notifications.input';

@InputType()
export class NotificationCreateInput {

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:false})
    message!: string;

    @Field(() => Boolean, {nullable:true})
    read?: boolean;

    @Field(() => AccountCreateNestedOneWithoutNotificationsInput, {nullable:false})
    account!: AccountCreateNestedOneWithoutNotificationsInput;
}
