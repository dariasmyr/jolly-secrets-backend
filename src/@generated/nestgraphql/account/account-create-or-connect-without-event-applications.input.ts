import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { AccountWhereUniqueInput } from './account-where-unique.input';
import { Type } from 'class-transformer';
import { AccountCreateWithoutEventApplicationsInput } from './account-create-without-event-applications.input';

@InputType()
export class AccountCreateOrConnectWithoutEventApplicationsInput {

    @Field(() => AccountWhereUniqueInput, {nullable:false})
    @Type(() => AccountWhereUniqueInput)
    where!: Prisma.AtLeast<AccountWhereUniqueInput, 'id' | 'username'>;

    @Field(() => AccountCreateWithoutEventApplicationsInput, {nullable:false})
    @Type(() => AccountCreateWithoutEventApplicationsInput)
    create!: AccountCreateWithoutEventApplicationsInput;
}
