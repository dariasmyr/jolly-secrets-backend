import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AccountWhereInput } from './account-where.input';
import { Type } from 'class-transformer';
import { AccountUpdateWithoutEventApplicationsInput } from './account-update-without-event-applications.input';

@InputType()
export class AccountUpdateToOneWithWhereWithoutEventApplicationsInput {

    @Field(() => AccountWhereInput, {nullable:true})
    @Type(() => AccountWhereInput)
    where?: AccountWhereInput;

    @Field(() => AccountUpdateWithoutEventApplicationsInput, {nullable:false})
    @Type(() => AccountUpdateWithoutEventApplicationsInput)
    data!: AccountUpdateWithoutEventApplicationsInput;
}
