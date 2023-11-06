import { Test, TestingModule } from '@nestjs/testing';
import { SiteUpdatesService } from './site-updates.service';

describe('SiteUpdatesService', () => {
  let service: SiteUpdatesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SiteUpdatesService],
    }).compile();

    service = module.get<SiteUpdatesService>(SiteUpdatesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
