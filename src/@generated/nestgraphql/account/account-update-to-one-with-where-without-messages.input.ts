import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AccountWhereInput } from './account-where.input';
import { Type } from 'class-transformer';
import { AccountUpdateWithoutMessagesInput } from './account-update-without-messages.input';

@InputType()
export class AccountUpdateToOneWithWhereWithoutMessagesInput {

    @Field(() => AccountWhereInput, {nullable:true})
    @Type(() => AccountWhereInput)
    where?: AccountWhereInput;

    @Field(() => AccountUpdateWithoutMessagesInput, {nullable:false})
    @Type(() => AccountUpdateWithoutMessagesInput)
    data!: AccountUpdateWithoutMessagesInput;
}
