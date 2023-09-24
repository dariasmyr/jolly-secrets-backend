import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ExternalProfileProvider } from '../prisma/external-profile-provider.enum';
import { ExternalProfileCountAggregate } from './external-profile-count-aggregate.output';
import { ExternalProfileAvgAggregate } from './external-profile-avg-aggregate.output';
import { ExternalProfileSumAggregate } from './external-profile-sum-aggregate.output';
import { ExternalProfileMinAggregate } from './external-profile-min-aggregate.output';
import { ExternalProfileMaxAggregate } from './external-profile-max-aggregate.output';

@ObjectType()
export class ExternalProfileGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => ExternalProfileProvider, {nullable:false})
    provider!: keyof typeof ExternalProfileProvider;

    @Field(() => String, {nullable:false})
    externalId!: string;

    @Field(() => Int, {nullable:false})
    accountId!: number;

    @Field(() => ExternalProfileCountAggregate, {nullable:true})
    _count?: ExternalProfileCountAggregate;

    @Field(() => ExternalProfileAvgAggregate, {nullable:true})
    _avg?: ExternalProfileAvgAggregate;

    @Field(() => ExternalProfileSumAggregate, {nullable:true})
    _sum?: ExternalProfileSumAggregate;

    @Field(() => ExternalProfileMinAggregate, {nullable:true})
    _min?: ExternalProfileMinAggregate;

    @Field(() => ExternalProfileMaxAggregate, {nullable:true})
    _max?: ExternalProfileMaxAggregate;
}
