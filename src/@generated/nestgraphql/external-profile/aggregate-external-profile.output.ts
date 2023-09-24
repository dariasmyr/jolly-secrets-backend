import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ExternalProfileCountAggregate } from './external-profile-count-aggregate.output';
import { ExternalProfileAvgAggregate } from './external-profile-avg-aggregate.output';
import { ExternalProfileSumAggregate } from './external-profile-sum-aggregate.output';
import { ExternalProfileMinAggregate } from './external-profile-min-aggregate.output';
import { ExternalProfileMaxAggregate } from './external-profile-max-aggregate.output';

@ObjectType()
export class AggregateExternalProfile {

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
