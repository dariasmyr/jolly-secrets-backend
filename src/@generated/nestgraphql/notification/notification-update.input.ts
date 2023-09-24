import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AccountUpdateOneRequiredWithoutNotificationsNestedInput } from '../account/account-update-one-required-without-notifications-nested.input';

@InputType()
export class NotificationUpdateInput {

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => String, {nullable:true})
    title?: string;

    @Field(() => String, {nullable:true})
    message?: string;

    @Field(() => Boolean, {nullable:true})
    read?: boolean;

    @Field(() => AccountUpdateOneRequiredWithoutNotificationsNestedInput, {nullable:true})
    account?: AccountUpdateOneRequiredWithoutNotificationsNestedInput;
}
