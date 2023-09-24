import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ExternalProfileProvider } from '../prisma/external-profile-provider.enum';

@InputType()
export class ExternalProfileProviderExternalIdCompoundUniqueInput {

    @Field(() => ExternalProfileProvider, {nullable:false})
    provider!: keyof typeof ExternalProfileProvider;

    @Field(() => String, {nullable:false})
    externalId!: string;
}
