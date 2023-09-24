import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { NotificationWhereUniqueInput } from './notification-where-unique.input';
import { Type } from 'class-transformer';
import { NotificationCreateWithoutAccountInput } from './notification-create-without-account.input';

@InputType()
export class NotificationCreateOrConnectWithoutAccountInput {

    @Field(() => NotificationWhereUniqueInput, {nullable:false})
    @Type(() => NotificationWhereUniqueInput)
    where!: Prisma.AtLeast<NotificationWhereUniqueInput, 'id'>;

    @Field(() => NotificationCreateWithoutAccountInput, {nullable:false})
    @Type(() => NotificationCreateWithoutAccountInput)
    create!: NotificationCreateWithoutAccountInput;
}
