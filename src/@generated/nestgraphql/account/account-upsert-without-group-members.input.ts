import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AccountUpdateWithoutGroupMembersInput } from './account-update-without-group-members.input';
import { Type } from 'class-transformer';
import { AccountCreateWithoutGroupMembersInput } from './account-create-without-group-members.input';
import { AccountWhereInput } from './account-where.input';

@InputType()
export class AccountUpsertWithoutGroupMembersInput {

    @Field(() => AccountUpdateWithoutGroupMembersInput, {nullable:false})
    @Type(() => AccountUpdateWithoutGroupMembersInput)
    update!: AccountUpdateWithoutGroupMembersInput;

    @Field(() => AccountCreateWithoutGroupMembersInput, {nullable:false})
    @Type(() => AccountCreateWithoutGroupMembersInput)
    create!: AccountCreateWithoutGroupMembersInput;

    @Field(() => AccountWhereInput, {nullable:true})
    @Type(() => AccountWhereInput)
    where?: AccountWhereInput;
}
