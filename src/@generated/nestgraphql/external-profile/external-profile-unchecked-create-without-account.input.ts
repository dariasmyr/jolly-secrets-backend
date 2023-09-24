import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ExternalProfileProvider } from '../prisma/external-profile-provider.enum';

@InputType()
export class ExternalProfileUncheckedCreateWithoutAccountInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => ExternalProfileProvider, {nullable:false})
    provider!: keyof typeof ExternalProfileProvider;

    @Field(() => String, {nullable:false})
    externalId!: string;
}
