import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ExternalProfileProvider } from '../prisma/external-profile-provider.enum';

@ObjectType()
export class ExternalProfileMaxAggregate {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => ExternalProfileProvider, {nullable:true})
    provider?: keyof typeof ExternalProfileProvider;

    @Field(() => String, {nullable:true})
    externalId?: string;

    @Field(() => Int, {nullable:true})
    accountId?: number;
}
