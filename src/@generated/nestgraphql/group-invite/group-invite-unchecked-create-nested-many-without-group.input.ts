import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GroupInviteCreateWithoutGroupInput } from './group-invite-create-without-group.input';
import { Type } from 'class-transformer';
import { GroupInviteCreateOrConnectWithoutGroupInput } from './group-invite-create-or-connect-without-group.input';
import { GroupInviteCreateManyGroupInputEnvelope } from './group-invite-create-many-group-input-envelope.input';
import { Prisma } from '@prisma/client';
import { GroupInviteWhereUniqueInput } from './group-invite-where-unique.input';

@InputType()
export class GroupInviteUncheckedCreateNestedManyWithoutGroupInput {

    @Field(() => [GroupInviteCreateWithoutGroupInput], {nullable:true})
    @Type(() => GroupInviteCreateWithoutGroupInput)
    create?: Array<GroupInviteCreateWithoutGroupInput>;

    @Field(() => [GroupInviteCreateOrConnectWithoutGroupInput], {nullable:true})
    @Type(() => GroupInviteCreateOrConnectWithoutGroupInput)
    connectOrCreate?: Array<GroupInviteCreateOrConnectWithoutGroupInput>;

    @Field(() => GroupInviteCreateManyGroupInputEnvelope, {nullable:true})
    @Type(() => GroupInviteCreateManyGroupInputEnvelope)
    createMany?: GroupInviteCreateManyGroupInputEnvelope;

    @Field(() => [GroupInviteWhereUniqueInput], {nullable:true})
    @Type(() => GroupInviteWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<GroupInviteWhereUniqueInput, 'id' | 'code'>>;
}
