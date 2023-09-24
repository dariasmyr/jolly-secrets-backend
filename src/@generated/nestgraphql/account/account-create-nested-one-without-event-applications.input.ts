import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AccountCreateWithoutEventApplicationsInput } from './account-create-without-event-applications.input';
import { Type } from 'class-transformer';
import { AccountCreateOrConnectWithoutEventApplicationsInput } from './account-create-or-connect-without-event-applications.input';
import { Prisma } from '@prisma/client';
import { AccountWhereUniqueInput } from './account-where-unique.input';

@InputType()
export class AccountCreateNestedOneWithoutEventApplicationsInput {

    @Field(() => AccountCreateWithoutEventApplicationsInput, {nullable:true})
    @Type(() => AccountCreateWithoutEventApplicationsInput)
    create?: AccountCreateWithoutEventApplicationsInput;

    @Field(() => AccountCreateOrConnectWithoutEventApplicationsInput, {nullable:true})
    @Type(() => AccountCreateOrConnectWithoutEventApplicationsInput)
    connectOrCreate?: AccountCreateOrConnectWithoutEventApplicationsInput;

    @Field(() => AccountWhereUniqueInput, {nullable:true})
    @Type(() => AccountWhereUniqueInput)
    connect?: Prisma.AtLeast<AccountWhereUniqueInput, 'id' | 'username'>;
}
