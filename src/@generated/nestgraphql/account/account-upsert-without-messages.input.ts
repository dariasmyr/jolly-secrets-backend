import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AccountUpdateWithoutMessagesInput } from './account-update-without-messages.input';
import { Type } from 'class-transformer';
import { AccountCreateWithoutMessagesInput } from './account-create-without-messages.input';
import { AccountWhereInput } from './account-where.input';

@InputType()
export class AccountUpsertWithoutMessagesInput {

    @Field(() => AccountUpdateWithoutMessagesInput, {nullable:false})
    @Type(() => AccountUpdateWithoutMessagesInput)
    update!: AccountUpdateWithoutMessagesInput;

    @Field(() => AccountCreateWithoutMessagesInput, {nullable:false})
    @Type(() => AccountCreateWithoutMessagesInput)
    create!: AccountCreateWithoutMessagesInput;

    @Field(() => AccountWhereInput, {nullable:true})
    @Type(() => AccountWhereInput)
    where?: AccountWhereInput;
}
