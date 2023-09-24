import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AccountCreateWithoutEventApplicationsInput } from './account-create-without-event-applications.input';
import { Type } from 'class-transformer';
import { AccountCreateOrConnectWithoutEventApplicationsInput } from './account-create-or-connect-without-event-applications.input';
import { AccountUpsertWithoutEventApplicationsInput } from './account-upsert-without-event-applications.input';
import { Prisma } from '@prisma/client';
import { AccountWhereUniqueInput } from './account-where-unique.input';
import { AccountUpdateToOneWithWhereWithoutEventApplicationsInput } from './account-update-to-one-with-where-without-event-applications.input';

@InputType()
export class AccountUpdateOneRequiredWithoutEventApplicationsNestedInput {

    @Field(() => AccountCreateWithoutEventApplicationsInput, {nullable:true})
    @Type(() => AccountCreateWithoutEventApplicationsInput)
    create?: AccountCreateWithoutEventApplicationsInput;

    @Field(() => AccountCreateOrConnectWithoutEventApplicationsInput, {nullable:true})
    @Type(() => AccountCreateOrConnectWithoutEventApplicationsInput)
    connectOrCreate?: AccountCreateOrConnectWithoutEventApplicationsInput;

    @Field(() => AccountUpsertWithoutEventApplicationsInput, {nullable:true})
    @Type(() => AccountUpsertWithoutEventApplicationsInput)
    upsert?: AccountUpsertWithoutEventApplicationsInput;

    @Field(() => AccountWhereUniqueInput, {nullable:true})
    @Type(() => AccountWhereUniqueInput)
    connect?: Prisma.AtLeast<AccountWhereUniqueInput, 'id' | 'username'>;

    @Field(() => AccountUpdateToOneWithWhereWithoutEventApplicationsInput, {nullable:true})
    @Type(() => AccountUpdateToOneWithWhereWithoutEventApplicationsInput)
    update?: AccountUpdateToOneWithWhereWithoutEventApplicationsInput;
}
