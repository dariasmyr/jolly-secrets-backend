import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { EnumExternalProfileProviderWithAggregatesFilter } from '../prisma/enum-external-profile-provider-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';

@InputType()
export class ExternalProfileScalarWhereWithAggregatesInput {

    @Field(() => [ExternalProfileScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<ExternalProfileScalarWhereWithAggregatesInput>;

    @Field(() => [ExternalProfileScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<ExternalProfileScalarWhereWithAggregatesInput>;

    @Field(() => [ExternalProfileScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<ExternalProfileScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;

    @Field(() => EnumExternalProfileProviderWithAggregatesFilter, {nullable:true})
    provider?: EnumExternalProfileProviderWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    externalId?: StringWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    accountId?: IntWithAggregatesFilter;
}
