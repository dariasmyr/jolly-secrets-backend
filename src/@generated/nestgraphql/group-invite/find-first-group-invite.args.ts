import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GroupInviteWhereInput } from './group-invite-where.input';
import { Type } from 'class-transformer';
import { GroupInviteOrderByWithRelationInput } from './group-invite-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { GroupInviteWhereUniqueInput } from './group-invite-where-unique.input';
import { Int } from '@nestjs/graphql';
import { GroupInviteScalarFieldEnum } from './group-invite-scalar-field.enum';

@ArgsType()
export class FindFirstGroupInviteArgs {

    @Field(() => GroupInviteWhereInput, {nullable:true})
    @Type(() => GroupInviteWhereInput)
    where?: GroupInviteWhereInput;

    @Field(() => [GroupInviteOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<GroupInviteOrderByWithRelationInput>;

    @Field(() => GroupInviteWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<GroupInviteWhereUniqueInput, 'id' | 'code'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [GroupInviteScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof GroupInviteScalarFieldEnum>;
}
