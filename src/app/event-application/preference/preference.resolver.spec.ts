import { Test, TestingModule } from '@nestjs/testing';

import { PreferenceResolver } from './preference.resolver';

describe('PreferenceResolver', () => {
  let resolver: PreferenceResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PreferenceResolver],
    }).compile();

    resolver = module.get<PreferenceResolver>(PreferenceResolver);
  });

  test('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
