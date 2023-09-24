import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ExternalProfileProviderExternalIdCompoundUniqueInput } from './external-profile-provider-external-id-compound-unique.input';
import { ExternalProfileWhereInput } from './external-profile-where.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { EnumExternalProfileProviderFilter } from '../prisma/enum-external-profile-provider-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { AccountRelationFilter } from '../account/account-relation-filter.input';

@InputType()
export class ExternalProfileWhereUniqueInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => ExternalProfileProviderExternalIdCompoundUniqueInput, {nullable:true})
    provider_externalId?: ExternalProfileProviderExternalIdCompoundUniqueInput;

    @Field(() => [ExternalProfileWhereInput], {nullable:true})
    AND?: Array<ExternalProfileWhereInput>;

    @Field(() => [ExternalProfileWhereInput], {nullable:true})
    OR?: Array<ExternalProfileWhereInput>;

    @Field(() => [ExternalProfileWhereInput], {nullable:true})
    NOT?: Array<ExternalProfileWhereInput>;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => EnumExternalProfileProviderFilter, {nullable:true})
    provider?: EnumExternalProfileProviderFilter;

    @Field(() => StringFilter, {nullable:true})
    externalId?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    accountId?: IntFilter;

    @Field(() => AccountRelationFilter, {nullable:true})
    account?: AccountRelationFilter;
}
