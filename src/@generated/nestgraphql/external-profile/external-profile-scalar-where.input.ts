import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { EnumExternalProfileProviderFilter } from '../prisma/enum-external-profile-provider-filter.input';
import { StringFilter } from '../prisma/string-filter.input';

@InputType()
export class ExternalProfileScalarWhereInput {

    @Field(() => [ExternalProfileScalarWhereInput], {nullable:true})
    AND?: Array<ExternalProfileScalarWhereInput>;

    @Field(() => [ExternalProfileScalarWhereInput], {nullable:true})
    OR?: Array<ExternalProfileScalarWhereInput>;

    @Field(() => [ExternalProfileScalarWhereInput], {nullable:true})
    NOT?: Array<ExternalProfileScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

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
}
