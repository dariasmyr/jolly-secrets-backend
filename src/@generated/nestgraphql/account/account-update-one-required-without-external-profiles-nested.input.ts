import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AccountCreateWithoutExternalProfilesInput } from './account-create-without-external-profiles.input';
import { Type } from 'class-transformer';
import { AccountCreateOrConnectWithoutExternalProfilesInput } from './account-create-or-connect-without-external-profiles.input';
import { AccountUpsertWithoutExternalProfilesInput } from './account-upsert-without-external-profiles.input';
import { Prisma } from '@prisma/client';
import { AccountWhereUniqueInput } from './account-where-unique.input';
import { AccountUpdateToOneWithWhereWithoutExternalProfilesInput } from './account-update-to-one-with-where-without-external-profiles.input';

@InputType()
export class AccountUpdateOneRequiredWithoutExternalProfilesNestedInput {

    @Field(() => AccountCreateWithoutExternalProfilesInput, {nullable:true})
    @Type(() => AccountCreateWithoutExternalProfilesInput)
    create?: AccountCreateWithoutExternalProfilesInput;

    @Field(() => AccountCreateOrConnectWithoutExternalProfilesInput, {nullable:true})
    @Type(() => AccountCreateOrConnectWithoutExternalProfilesInput)
    connectOrCreate?: AccountCreateOrConnectWithoutExternalProfilesInput;

    @Field(() => AccountUpsertWithoutExternalProfilesInput, {nullable:true})
    @Type(() => AccountUpsertWithoutExternalProfilesInput)
    upsert?: AccountUpsertWithoutExternalProfilesInput;

    @Field(() => AccountWhereUniqueInput, {nullable:true})
    @Type(() => AccountWhereUniqueInput)
    connect?: Prisma.AtLeast<AccountWhereUniqueInput, 'id' | 'username'>;

    @Field(() => AccountUpdateToOneWithWhereWithoutExternalProfilesInput, {nullable:true})
    @Type(() => AccountUpdateToOneWithWhereWithoutExternalProfilesInput)
    update?: AccountUpdateToOneWithWhereWithoutExternalProfilesInput;
}
