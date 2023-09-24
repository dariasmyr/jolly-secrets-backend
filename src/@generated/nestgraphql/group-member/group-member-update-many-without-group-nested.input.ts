import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GroupMemberCreateWithoutGroupInput } from './group-member-create-without-group.input';
import { Type } from 'class-transformer';
import { GroupMemberCreateOrConnectWithoutGroupInput } from './group-member-create-or-connect-without-group.input';
import { GroupMemberUpsertWithWhereUniqueWithoutGroupInput } from './group-member-upsert-with-where-unique-without-group.input';
import { GroupMemberCreateManyGroupInputEnvelope } from './group-member-create-many-group-input-envelope.input';
import { Prisma } from '@prisma/client';
import { GroupMemberWhereUniqueInput } from './group-member-where-unique.input';
import { GroupMemberUpdateWithWhereUniqueWithoutGroupInput } from './group-member-update-with-where-unique-without-group.input';
import { GroupMemberUpdateManyWithWhereWithoutGroupInput } from './group-member-update-many-with-where-without-group.input';
import { GroupMemberScalarWhereInput } from './group-member-scalar-where.input';

@InputType()
export class GroupMemberUpdateManyWithoutGroupNestedInput {

    @Field(() => [GroupMemberCreateWithoutGroupInput], {nullable:true})
    @Type(() => GroupMemberCreateWithoutGroupInput)
    create?: Array<GroupMemberCreateWithoutGroupInput>;

    @Field(() => [GroupMemberCreateOrConnectWithoutGroupInput], {nullable:true})
    @Type(() => GroupMemberCreateOrConnectWithoutGroupInput)
    connectOrCreate?: Array<GroupMemberCreateOrConnectWithoutGroupInput>;

    @Field(() => [GroupMemberUpsertWithWhereUniqueWithoutGroupInput], {nullable:true})
    @Type(() => GroupMemberUpsertWithWhereUniqueWithoutGroupInput)
    upsert?: Array<GroupMemberUpsertWithWhereUniqueWithoutGroupInput>;

    @Field(() => GroupMemberCreateManyGroupInputEnvelope, {nullable:true})
    @Type(() => GroupMemberCreateManyGroupInputEnvelope)
    createMany?: GroupMemberCreateManyGroupInputEnvelope;

    @Field(() => [GroupMemberWhereUniqueInput], {nullable:true})
    @Type(() => GroupMemberWhereUniqueInput)
    set?: Array<Prisma.AtLeast<GroupMemberWhereUniqueInput, 'id' | 'groupId_accountId'>>;

    @Field(() => [GroupMemberWhereUniqueInput], {nullable:true})
    @Type(() => GroupMemberWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<GroupMemberWhereUniqueInput, 'id' | 'groupId_accountId'>>;

    @Field(() => [GroupMemberWhereUniqueInput], {nullable:true})
    @Type(() => GroupMemberWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<GroupMemberWhereUniqueInput, 'id' | 'groupId_accountId'>>;

    @Field(() => [GroupMemberWhereUniqueInput], {nullable:true})
    @Type(() => GroupMemberWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<GroupMemberWhereUniqueInput, 'id' | 'groupId_accountId'>>;

    @Field(() => [GroupMemberUpdateWithWhereUniqueWithoutGroupInput], {nullable:true})
    @Type(() => GroupMemberUpdateWithWhereUniqueWithoutGroupInput)
    update?: Array<GroupMemberUpdateWithWhereUniqueWithoutGroupInput>;

    @Field(() => [GroupMemberUpdateManyWithWhereWithoutGroupInput], {nullable:true})
    @Type(() => GroupMemberUpdateManyWithWhereWithoutGroupInput)
    updateMany?: Array<GroupMemberUpdateManyWithWhereWithoutGroupInput>;

    @Field(() => [GroupMemberScalarWhereInput], {nullable:true})
    @Type(() => GroupMemberScalarWhereInput)
    deleteMany?: Array<GroupMemberScalarWhereInput>;
}
