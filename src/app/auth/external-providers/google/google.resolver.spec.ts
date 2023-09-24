import { Test, TestingModule } from '@nestjs/testing';

import { GoogleResolver } from './google.resolver';

describe('GoogleResolver', () => {
  let resolver: GoogleResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GoogleResolver],
    }).compile();

    resolver = module.get<GoogleResolver>(GoogleResolver);
  });

  test('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
