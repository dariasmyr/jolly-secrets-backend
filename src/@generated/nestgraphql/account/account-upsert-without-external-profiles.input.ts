import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AccountUpdateWithoutExternalProfilesInput } from './account-update-without-external-profiles.input';
import { Type } from 'class-transformer';
import { AccountCreateWithoutExternalProfilesInput } from './account-create-without-external-profiles.input';
import { AccountWhereInput } from './account-where.input';

@InputType()
export class AccountUpsertWithoutExternalProfilesInput {

    @Field(() => AccountUpdateWithoutExternalProfilesInput, {nullable:false})
    @Type(() => AccountUpdateWithoutExternalProfilesInput)
    update!: AccountUpdateWithoutExternalProfilesInput;

    @Field(() => AccountCreateWithoutExternalProfilesInput, {nullable:false})
    @Type(() => AccountCreateWithoutExternalProfilesInput)
    create!: AccountCreateWithoutExternalProfilesInput;

    @Field(() => AccountWhereInput, {nullable:true})
    @Type(() => AccountWhereInput)
    where?: AccountWhereInput;
}
