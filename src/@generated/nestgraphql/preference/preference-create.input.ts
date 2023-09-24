import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PriceRange } from '../prisma/price-range.enum';
import { EventApplicationCreateNestedOneWithoutPreferencesInput } from '../event-application/event-application-create-nested-one-without-preferences.input';

@InputType()
export class PreferenceCreateInput {

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => PriceRange, {nullable:false})
    priceRange!: keyof typeof PriceRange;

    @Field(() => String, {nullable:false})
    likes!: string;

    @Field(() => String, {nullable:false})
    dislikes!: string;

    @Field(() => String, {nullable:false})
    comment!: string;

    @Field(() => EventApplicationCreateNestedOneWithoutPreferencesInput, {nullable:true})
    application?: EventApplicationCreateNestedOneWithoutPreferencesInput;
}
