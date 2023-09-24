import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ExternalProfileProvider } from './external-profile-provider.enum';
import { NestedEnumExternalProfileProviderWithAggregatesFilter } from './nested-enum-external-profile-provider-with-aggregates-filter.input';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumExternalProfileProviderFilter } from './nested-enum-external-profile-provider-filter.input';

@InputType()
export class EnumExternalProfileProviderWithAggregatesFilter {

    @Field(() => ExternalProfileProvider, {nullable:true})
    equals?: keyof typeof ExternalProfileProvider;

    @Field(() => [ExternalProfileProvider], {nullable:true})
    in?: Array<keyof typeof ExternalProfileProvider>;

    @Field(() => [ExternalProfileProvider], {nullable:true})
    notIn?: Array<keyof typeof ExternalProfileProvider>;

    @Field(() => NestedEnumExternalProfileProviderWithAggregatesFilter, {nullable:true})
    not?: NestedEnumExternalProfileProviderWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumExternalProfileProviderFilter, {nullable:true})
    _min?: NestedEnumExternalProfileProviderFilter;

    @Field(() => NestedEnumExternalProfileProviderFilter, {nullable:true})
    _max?: NestedEnumExternalProfileProviderFilter;
}
