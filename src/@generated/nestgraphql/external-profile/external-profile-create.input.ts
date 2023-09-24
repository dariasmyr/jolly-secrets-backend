import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ExternalProfileProvider } from '../prisma/external-profile-provider.enum';
import { AccountCreateNestedOneWithoutExternalProfilesInput } from '../account/account-create-nested-one-without-external-profiles.input';

@InputType()
export class ExternalProfileCreateInput {

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => ExternalProfileProvider, {nullable:false})
    provider!: keyof typeof ExternalProfileProvider;

    @Field(() => String, {nullable:false})
    externalId!: string;

    @Field(() => AccountCreateNestedOneWithoutExternalProfilesInput, {nullable:false})
    account!: AccountCreateNestedOneWithoutExternalProfilesInput;
}
