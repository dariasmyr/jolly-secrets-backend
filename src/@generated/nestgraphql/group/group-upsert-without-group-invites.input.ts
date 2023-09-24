import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GroupUpdateWithoutGroupInvitesInput } from './group-update-without-group-invites.input';
import { Type } from 'class-transformer';
import { GroupCreateWithoutGroupInvitesInput } from './group-create-without-group-invites.input';
import { GroupWhereInput } from './group-where.input';

@InputType()
export class GroupUpsertWithoutGroupInvitesInput {

    @Field(() => GroupUpdateWithoutGroupInvitesInput, {nullable:false})
    @Type(() => GroupUpdateWithoutGroupInvitesInput)
    update!: GroupUpdateWithoutGroupInvitesInput;

    @Field(() => GroupCreateWithoutGroupInvitesInput, {nullable:false})
    @Type(() => GroupCreateWithoutGroupInvitesInput)
    create!: GroupCreateWithoutGroupInvitesInput;

    @Field(() => GroupWhereInput, {nullable:true})
    @Type(() => GroupWhereInput)
    where?: GroupWhereInput;
}
