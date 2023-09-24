import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ExternalProfileProvider } from './external-profile-provider.enum';

@InputType()
export class NestedEnumExternalProfileProviderFilter {

    @Field(() => ExternalProfileProvider, {nullable:true})
    equals?: keyof typeof ExternalProfileProvider;

    @Field(() => [ExternalProfileProvider], {nullable:true})
    in?: Array<keyof typeof ExternalProfileProvider>;

    @Field(() => [ExternalProfileProvider], {nullable:true})
    notIn?: Array<keyof typeof ExternalProfileProvider>;

    @Field(() => NestedEnumExternalProfileProviderFilter, {nullable:true})
    not?: NestedEnumExternalProfileProviderFilter;
}
