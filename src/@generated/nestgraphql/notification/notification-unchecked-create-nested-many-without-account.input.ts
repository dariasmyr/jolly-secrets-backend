import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NotificationCreateWithoutAccountInput } from './notification-create-without-account.input';
import { Type } from 'class-transformer';
import { NotificationCreateOrConnectWithoutAccountInput } from './notification-create-or-connect-without-account.input';
import { NotificationCreateManyAccountInputEnvelope } from './notification-create-many-account-input-envelope.input';
import { Prisma } from '@prisma/client';
import { NotificationWhereUniqueInput } from './notification-where-unique.input';

@InputType()
export class NotificationUncheckedCreateNestedManyWithoutAccountInput {

    @Field(() => [NotificationCreateWithoutAccountInput], {nullable:true})
    @Type(() => NotificationCreateWithoutAccountInput)
    create?: Array<NotificationCreateWithoutAccountInput>;

    @Field(() => [NotificationCreateOrConnectWithoutAccountInput], {nullable:true})
    @Type(() => NotificationCreateOrConnectWithoutAccountInput)
    connectOrCreate?: Array<NotificationCreateOrConnectWithoutAccountInput>;

    @Field(() => NotificationCreateManyAccountInputEnvelope, {nullable:true})
    @Type(() => NotificationCreateManyAccountInputEnvelope)
    createMany?: NotificationCreateManyAccountInputEnvelope;

    @Field(() => [NotificationWhereUniqueInput], {nullable:true})
    @Type(() => NotificationWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<NotificationWhereUniqueInput, 'id'>>;
}
