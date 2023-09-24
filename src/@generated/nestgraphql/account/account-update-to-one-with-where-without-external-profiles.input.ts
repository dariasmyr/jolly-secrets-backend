import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AccountWhereInput } from './account-where.input';
import { Type } from 'class-transformer';
import { AccountUpdateWithoutExternalProfilesInput } from './account-update-without-external-profiles.input';

@InputType()
export class AccountUpdateToOneWithWhereWithoutExternalProfilesInput {

    @Field(() => AccountWhereInput, {nullable:true})
    @Type(() => AccountWhereInput)
    where?: AccountWhereInput;

    @Field(() => AccountUpdateWithoutExternalProfilesInput, {nullable:false})
    @Type(() => AccountUpdateWithoutExternalProfilesInput)
    data!: AccountUpdateWithoutExternalProfilesInput;
}
