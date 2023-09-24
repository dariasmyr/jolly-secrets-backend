import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EventApplicationPairUpdateManyMutationInput } from './event-application-pair-update-many-mutation.input';
import { Type } from 'class-transformer';
import { EventApplicationPairWhereInput } from './event-application-pair-where.input';

@ArgsType()
export class UpdateManyEventApplicationPairArgs {

    @Field(() => EventApplicationPairUpdateManyMutationInput, {nullable:false})
    @Type(() => EventApplicationPairUpdateManyMutationInput)
    data!: EventApplicationPairUpdateManyMutationInput;

    @Field(() => EventApplicationPairWhereInput, {nullable:true})
    @Type(() => EventApplicationPairWhereInput)
    where?: EventApplicationPairWhereInput;
}
