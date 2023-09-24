import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GroupInviteCreateManyInput } from './group-invite-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyGroupInviteArgs {

    @Field(() => [GroupInviteCreateManyInput], {nullable:false})
    @Type(() => GroupInviteCreateManyInput)
    data!: Array<GroupInviteCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
