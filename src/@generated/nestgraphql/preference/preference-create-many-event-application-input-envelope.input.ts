import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PreferenceCreateManyEventApplicationInput } from './preference-create-many-event-application.input';
import { Type } from 'class-transformer';

@InputType()
export class PreferenceCreateManyEventApplicationInputEnvelope {

    @Field(() => [PreferenceCreateManyEventApplicationInput], {nullable:false})
    @Type(() => PreferenceCreateManyEventApplicationInput)
    data!: Array<PreferenceCreateManyEventApplicationInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
