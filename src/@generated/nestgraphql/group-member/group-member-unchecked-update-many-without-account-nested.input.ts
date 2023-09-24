import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GroupMemberCreateWithoutAccountInput } from './group-member-create-without-account.input';
import { Type } from 'class-transformer';
import { GroupMemberCreateOrConnectWithoutAccountInput } from './group-member-create-or-connect-without-account.input';
import { GroupMemberUpsertWithWhereUniqueWithoutAccountInput } from './group-member-upsert-with-where-unique-without-account.input';
import { GroupMemberCreateManyAccountInputEnvelope } from './group-member-create-many-account-input-envelope.input';
import { Prisma } from '@prisma/client';
import { GroupMemberWhereUniqueInput } from './group-member-where-unique.input';
import { GroupMemberUpdateWithWhereUniqueWithoutAccountInput } from './group-member-update-with-where-unique-without-account.input';
import { GroupMemberUpdateManyWithWhereWithoutAccountInput } from './group-member-update-many-with-where-without-account.input';
import { GroupMemberScalarWhereInput } from './group-member-scalar-where.input';

@InputType()
export class GroupMemberUncheckedUpdateManyWithoutAccountNestedInput {

    @Field(() => [GroupMemberCreateWithoutAccountInput], {nullable:true})
    @Type(() => GroupMemberCreateWithoutAccountInput)
    create?: Array<GroupMemberCreateWithoutAccountInput>;

    @Field(() => [GroupMemberCreateOrConnectWithoutAccountInput], {nullable:true})
    @Type(() => GroupMemberCreateOrConnectWithoutAccountInput)
    connectOrCreate?: Array<GroupMemberCreateOrConnectWithoutAccountInput>;

    @Field(() => [GroupMemberUpsertWithWhereUniqueWithoutAccountInput], {nullable:true})
    @Type(() => GroupMemberUpsertWithWhereUniqueWithoutAccountInput)
    upsert?: Array<GroupMemberUpsertWithWhereUniqueWithoutAccountInput>;

    @Field(() => GroupMemberCreateManyAccountInputEnvelope, {nullable:true})
    @Type(() => GroupMemberCreateManyAccountInputEnvelope)
    createMany?: GroupMemberCreateManyAccountInputEnvelope;

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

    @Field(() => [GroupMemberUpdateWithWhereUniqueWithoutAccountInput], {nullable:true})
    @Type(() => GroupMemberUpdateWithWhereUniqueWithoutAccountInput)
    update?: Array<GroupMemberUpdateWithWhereUniqueWithoutAccountInput>;

    @Field(() => [GroupMemberUpdateManyWithWhereWithoutAccountInput], {nullable:true})
    @Type(() => GroupMemberUpdateManyWithWhereWithoutAccountInput)
    updateMany?: Array<GroupMemberUpdateManyWithWhereWithoutAccountInput>;

    @Field(() => [GroupMemberScalarWhereInput], {nullable:true})
    @Type(() => GroupMemberScalarWhereInput)
    deleteMany?: Array<GroupMemberScalarWhereInput>;
}
