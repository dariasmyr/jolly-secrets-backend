import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PriceRange } from '../prisma/price-range.enum';
import { EventApplicationUpdateOneWithoutPreferencesNestedInput } from '../event-application/event-application-update-one-without-preferences-nested.input';

@InputType()
export class PreferenceUpdateInput {

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => PriceRange, {nullable:true})
    priceRange?: keyof typeof PriceRange;

    @Field(() => String, {nullable:true})
    likes?: string;

    @Field(() => String, {nullable:true})
    dislikes?: string;

    @Field(() => String, {nullable:true})
    comment?: string;

    @Field(() => EventApplicationUpdateOneWithoutPreferencesNestedInput, {nullable:true})
    application?: EventApplicationUpdateOneWithoutPreferencesNestedInput;
}
