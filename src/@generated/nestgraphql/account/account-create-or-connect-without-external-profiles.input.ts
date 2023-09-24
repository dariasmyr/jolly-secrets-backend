import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { AccountWhereUniqueInput } from './account-where-unique.input';
import { Type } from 'class-transformer';
import { AccountCreateWithoutExternalProfilesInput } from './account-create-without-external-profiles.input';

@InputType()
export class AccountCreateOrConnectWithoutExternalProfilesInput {

    @Field(() => AccountWhereUniqueInput, {nullable:false})
    @Type(() => AccountWhereUniqueInput)
    where!: Prisma.AtLeast<AccountWhereUniqueInput, 'id' | 'username'>;

    @Field(() => AccountCreateWithoutExternalProfilesInput, {nullable:false})
    @Type(() => AccountCreateWithoutExternalProfilesInput)
    create!: AccountCreateWithoutExternalProfilesInput;
}
