import { Test, TestingModule } from '@nestjs/testing';
import { SiteUpdatesResolver } from './site-updates.resolver';

describe('SiteUpdatesResolver', () => {
  let resolver: SiteUpdatesResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SiteUpdatesResolver],
    }).compile();

    resolver = module.get<SiteUpdatesResolver>(SiteUpdatesResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
