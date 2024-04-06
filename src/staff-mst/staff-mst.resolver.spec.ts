import { Test, TestingModule } from '@nestjs/testing';
import { StaffMstResolver } from './staff-mst.resolver';

describe('StaffMstResolver', () => {
  let resolver: StaffMstResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StaffMstResolver],
    }).compile();

    resolver = module.get<StaffMstResolver>(StaffMstResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
