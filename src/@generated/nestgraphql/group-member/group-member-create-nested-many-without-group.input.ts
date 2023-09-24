import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GroupMemberCreateWithoutGroupInput } from './group-member-create-without-group.input';
import { Type } from 'class-transformer';
import { GroupMemberCreateOrConnectWithoutGroupInput } from './group-member-create-or-connect-without-group.input';
import { GroupMemberCreateManyGroupInputEnvelope } from './group-member-create-many-group-input-envelope.input';
import { Prisma } from '@prisma/client';
import { GroupMemberWhereUniqueInput } from './group-member-where-unique.input';

@InputType()
export class GroupMemberCreateNestedManyWithoutGroupInput {

    @Field(() => [GroupMemberCreateWithoutGroupInput], {nullable:true})
    @Type(() => GroupMemberCreateWithoutGroupInput)
    create?: Array<GroupMemberCreateWithoutGroupInput>;

    @Field(() => [GroupMemberCreateOrConnectWithoutGroupInput], {nullable:true})
    @Type(() => GroupMemberCreateOrConnectWithoutGroupInput)
    connectOrCreate?: Array<GroupMemberCreateOrConnectWithoutGroupInput>;

    @Field(() => GroupMemberCreateManyGroupInputEnvelope, {nullable:true})
    @Type(() => GroupMemberCreateManyGroupInputEnvelope)
    createMany?: GroupMemberCreateManyGroupInputEnvelope;

    @Field(() => [GroupMemberWhereUniqueInput], {nullable:true})
    @Type(() => GroupMemberWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<GroupMemberWhereUniqueInput, 'id' | 'groupId_accountId'>>;
}
