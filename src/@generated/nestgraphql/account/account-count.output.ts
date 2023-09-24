import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class AccountCount {

    @Field(() => Int, {nullable:false})
    sessions?: number;

    @Field(() => Int, {nullable:false})
    externalProfiles?: number;

    @Field(() => Int, {nullable:false})
    groupMembers?: number;

    @Field(() => Int, {nullable:false})
    eventApplications?: number;

    @Field(() => Int, {nullable:false})
    notifications?: number;

    @Field(() => Int, {nullable:false})
    chatMembers?: number;

    @Field(() => Int, {nullable:false})
    messages?: number;
}
