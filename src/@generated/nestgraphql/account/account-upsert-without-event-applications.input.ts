import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AccountUpdateWithoutEventApplicationsInput } from './account-update-without-event-applications.input';
import { Type } from 'class-transformer';
import { AccountCreateWithoutEventApplicationsInput } from './account-create-without-event-applications.input';
import { AccountWhereInput } from './account-where.input';

@InputType()
export class AccountUpsertWithoutEventApplicationsInput {

    @Field(() => AccountUpdateWithoutEventApplicationsInput, {nullable:false})
    @Type(() => AccountUpdateWithoutEventApplicationsInput)
    update!: AccountUpdateWithoutEventApplicationsInput;

    @Field(() => AccountCreateWithoutEventApplicationsInput, {nullable:false})
    @Type(() => AccountCreateWithoutEventApplicationsInput)
    create!: AccountCreateWithoutEventApplicationsInput;

    @Field(() => AccountWhereInput, {nullable:true})
    @Type(() => AccountWhereInput)
    where?: AccountWhereInput;
}
