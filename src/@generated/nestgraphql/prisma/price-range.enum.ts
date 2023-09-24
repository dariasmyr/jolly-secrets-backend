import { registerEnumType } from '@nestjs/graphql';

export enum PriceRange {
    MIN_0_MAX_10 = "MIN_0_MAX_10",
    MIN_10_MAX_20 = "MIN_10_MAX_20",
    MIN_20_MAX_30 = "MIN_20_MAX_30",
    NO_MATTER = "NO_MATTER"
}


registerEnumType(PriceRange, { name: 'PriceRange', description: undefined })
