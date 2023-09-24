import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PreferenceCreateManyApplicationInput } from './preference-create-many-application.input';
import { Type } from 'class-transformer';

@InputType()
export class PreferenceCreateManyApplicationInputEnvelope {

    @Field(() => [PreferenceCreateManyApplicationInput], {nullable:false})
    @Type(() => PreferenceCreateManyApplicationInput)
    data!: Array<PreferenceCreateManyApplicationInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
