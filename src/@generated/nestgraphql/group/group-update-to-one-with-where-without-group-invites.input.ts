import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GroupWhereInput } from './group-where.input';
import { Type } from 'class-transformer';
import { GroupUpdateWithoutGroupInvitesInput } from './group-update-without-group-invites.input';

@InputType()
export class GroupUpdateToOneWithWhereWithoutGroupInvitesInput {

    @Field(() => GroupWhereInput, {nullable:true})
    @Type(() => GroupWhereInput)
    where?: GroupWhereInput;

    @Field(() => GroupUpdateWithoutGroupInvitesInput, {nullable:false})
    @Type(() => GroupUpdateWithoutGroupInvitesInput)
    data!: GroupUpdateWithoutGroupInvitesInput;
}
