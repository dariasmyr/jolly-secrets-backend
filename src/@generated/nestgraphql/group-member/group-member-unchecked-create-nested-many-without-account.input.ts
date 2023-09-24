import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GroupMemberCreateWithoutAccountInput } from './group-member-create-without-account.input';
import { Type } from 'class-transformer';
import { GroupMemberCreateOrConnectWithoutAccountInput } from './group-member-create-or-connect-without-account.input';
import { GroupMemberCreateManyAccountInputEnvelope } from './group-member-create-many-account-input-envelope.input';
import { Prisma } from '@prisma/client';
import { GroupMemberWhereUniqueInput } from './group-member-where-unique.input';

@InputType()
export class GroupMemberUncheckedCreateNestedManyWithoutAccountInput {

    @Field(() => [GroupMemberCreateWithoutAccountInput], {nullable:true})
    @Type(() => GroupMemberCreateWithoutAccountInput)
    create?: Array<GroupMemberCreateWithoutAccountInput>;

    @Field(() => [GroupMemberCreateOrConnectWithoutAccountInput], {nullable:true})
    @Type(() => GroupMemberCreateOrConnectWithoutAccountInput)
    connectOrCreate?: Array<GroupMemberCreateOrConnectWithoutAccountInput>;

    @Field(() => GroupMemberCreateManyAccountInputEnvelope, {nullable:true})
    @Type(() => GroupMemberCreateManyAccountInputEnvelope)
    createMany?: GroupMemberCreateManyAccountInputEnvelope;

    @Field(() => [GroupMemberWhereUniqueInput], {nullable:true})
    @Type(() => GroupMemberWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<GroupMemberWhereUniqueInput, 'id' | 'groupId_accountId'>>;
}
