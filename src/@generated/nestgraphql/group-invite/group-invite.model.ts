import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Group } from '../group/group.model';

@ObjectType()
export class GroupInvite {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => Int, {nullable:false})
    groupId!: number;

    @Field(() => String, {nullable:false})
    code!: string;

    @Field(() => Group, {nullable:false})
    group?: Group;
}
