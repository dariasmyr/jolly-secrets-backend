import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GroupInviteCreateWithoutGroupInput } from './group-invite-create-without-group.input';
import { Type } from 'class-transformer';
import { GroupInviteCreateOrConnectWithoutGroupInput } from './group-invite-create-or-connect-without-group.input';
import { GroupInviteUpsertWithWhereUniqueWithoutGroupInput } from './group-invite-upsert-with-where-unique-without-group.input';
import { GroupInviteCreateManyGroupInputEnvelope } from './group-invite-create-many-group-input-envelope.input';
import { Prisma } from '@prisma/client';
import { GroupInviteWhereUniqueInput } from './group-invite-where-unique.input';
import { GroupInviteUpdateWithWhereUniqueWithoutGroupInput } from './group-invite-update-with-where-unique-without-group.input';
import { GroupInviteUpdateManyWithWhereWithoutGroupInput } from './group-invite-update-many-with-where-without-group.input';
import { GroupInviteScalarWhereInput } from './group-invite-scalar-where.input';

@InputType()
export class GroupInviteUncheckedUpdateManyWithoutGroupNestedInput {

    @Field(() => [GroupInviteCreateWithoutGroupInput], {nullable:true})
    @Type(() => GroupInviteCreateWithoutGroupInput)
    create?: Array<GroupInviteCreateWithoutGroupInput>;

    @Field(() => [GroupInviteCreateOrConnectWithoutGroupInput], {nullable:true})
    @Type(() => GroupInviteCreateOrConnectWithoutGroupInput)
    connectOrCreate?: Array<GroupInviteCreateOrConnectWithoutGroupInput>;

    @Field(() => [GroupInviteUpsertWithWhereUniqueWithoutGroupInput], {nullable:true})
    @Type(() => GroupInviteUpsertWithWhereUniqueWithoutGroupInput)
    upsert?: Array<GroupInviteUpsertWithWhereUniqueWithoutGroupInput>;

    @Field(() => GroupInviteCreateManyGroupInputEnvelope, {nullable:true})
    @Type(() => GroupInviteCreateManyGroupInputEnvelope)
    createMany?: GroupInviteCreateManyGroupInputEnvelope;

    @Field(() => [GroupInviteWhereUniqueInput], {nullable:true})
    @Type(() => GroupInviteWhereUniqueInput)
    set?: Array<Prisma.AtLeast<GroupInviteWhereUniqueInput, 'id' | 'code'>>;

    @Field(() => [GroupInviteWhereUniqueInput], {nullable:true})
    @Type(() => GroupInviteWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<GroupInviteWhereUniqueInput, 'id' | 'code'>>;

    @Field(() => [GroupInviteWhereUniqueInput], {nullable:true})
    @Type(() => GroupInviteWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<GroupInviteWhereUniqueInput, 'id' | 'code'>>;

    @Field(() => [GroupInviteWhereUniqueInput], {nullable:true})
    @Type(() => GroupInviteWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<GroupInviteWhereUniqueInput, 'id' | 'code'>>;

    @Field(() => [GroupInviteUpdateWithWhereUniqueWithoutGroupInput], {nullable:true})
    @Type(() => GroupInviteUpdateWithWhereUniqueWithoutGroupInput)
    update?: Array<GroupInviteUpdateWithWhereUniqueWithoutGroupInput>;

    @Field(() => [GroupInviteUpdateManyWithWhereWithoutGroupInput], {nullable:true})
    @Type(() => GroupInviteUpdateManyWithWhereWithoutGroupInput)
    updateMany?: Array<GroupInviteUpdateManyWithWhereWithoutGroupInput>;

    @Field(() => [GroupInviteScalarWhereInput], {nullable:true})
    @Type(() => GroupInviteScalarWhereInput)
    deleteMany?: Array<GroupInviteScalarWhereInput>;
}
