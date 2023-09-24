import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NotificationCreateManyAccountInput } from './notification-create-many-account.input';
import { Type } from 'class-transformer';

@InputType()
export class NotificationCreateManyAccountInputEnvelope {

    @Field(() => [NotificationCreateManyAccountInput], {nullable:false})
    @Type(() => NotificationCreateManyAccountInput)
    data!: Array<NotificationCreateManyAccountInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
