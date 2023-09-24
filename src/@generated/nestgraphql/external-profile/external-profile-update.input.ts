import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ExternalProfileProvider } from '../prisma/external-profile-provider.enum';
import { AccountUpdateOneRequiredWithoutExternalProfilesNestedInput } from '../account/account-update-one-required-without-external-profiles-nested.input';

@InputType()
export class ExternalProfileUpdateInput {

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => ExternalProfileProvider, {nullable:true})
    provider?: keyof typeof ExternalProfileProvider;

    @Field(() => String, {nullable:true})
    externalId?: string;

    @Field(() => AccountUpdateOneRequiredWithoutExternalProfilesNestedInput, {nullable:true})
    account?: AccountUpdateOneRequiredWithoutExternalProfilesNestedInput;
}
