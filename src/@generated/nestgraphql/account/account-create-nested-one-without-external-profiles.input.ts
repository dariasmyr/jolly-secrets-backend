import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AccountCreateWithoutExternalProfilesInput } from './account-create-without-external-profiles.input';
import { Type } from 'class-transformer';
import { AccountCreateOrConnectWithoutExternalProfilesInput } from './account-create-or-connect-without-external-profiles.input';
import { Prisma } from '@prisma/client';
import { AccountWhereUniqueInput } from './account-where-unique.input';

@InputType()
export class AccountCreateNestedOneWithoutExternalProfilesInput {

    @Field(() => AccountCreateWithoutExternalProfilesInput, {nullable:true})
    @Type(() => AccountCreateWithoutExternalProfilesInput)
    create?: AccountCreateWithoutExternalProfilesInput;

    @Field(() => AccountCreateOrConnectWithoutExternalProfilesInput, {nullable:true})
    @Type(() => AccountCreateOrConnectWithoutExternalProfilesInput)
    connectOrCreate?: AccountCreateOrConnectWithoutExternalProfilesInput;

    @Field(() => AccountWhereUniqueInput, {nullable:true})
    @Type(() => AccountWhereUniqueInput)
    connect?: Prisma.AtLeast<AccountWhereUniqueInput, 'id' | 'username'>;
}
