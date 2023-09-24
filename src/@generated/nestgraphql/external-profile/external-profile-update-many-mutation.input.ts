import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ExternalProfileProvider } from '../prisma/external-profile-provider.enum';

@InputType()
export class ExternalProfileUpdateManyMutationInput {

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => ExternalProfileProvider, {nullable:true})
    provider?: keyof typeof ExternalProfileProvider;

    @Field(() => String, {nullable:true})
    externalId?: string;
}
