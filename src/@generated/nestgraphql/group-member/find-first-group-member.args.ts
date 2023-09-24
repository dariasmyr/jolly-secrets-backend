import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GroupMemberWhereInput } from './group-member-where.input';
import { Type } from 'class-transformer';
import { GroupMemberOrderByWithRelationInput } from './group-member-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { GroupMemberWhereUniqueInput } from './group-member-where-unique.input';
import { Int } from '@nestjs/graphql';
import { GroupMemberScalarFieldEnum } from './group-member-scalar-field.enum';

@ArgsType()
export class FindFirstGroupMemberArgs {

    @Field(() => GroupMemberWhereInput, {nullable:true})
    @Type(() => GroupMemberWhereInput)
    where?: GroupMemberWhereInput;

    @Field(() => [GroupMemberOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<GroupMemberOrderByWithRelationInput>;

    @Field(() => GroupMemberWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<GroupMemberWhereUniqueInput, 'id' | 'groupId_accountId'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [GroupMemberScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof GroupMemberScalarFieldEnum>;
}
