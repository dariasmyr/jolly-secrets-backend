import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MessageCreateManyAccountInput } from './message-create-many-account.input';
import { Type } from 'class-transformer';

@InputType()
export class MessageCreateManyAccountInputEnvelope {

    @Field(() => [MessageCreateManyAccountInput], {nullable:false})
    @Type(() => MessageCreateManyAccountInput)
    data!: Array<MessageCreateManyAccountInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
