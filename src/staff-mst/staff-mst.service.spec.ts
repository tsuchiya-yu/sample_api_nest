import { Test, TestingModule } from '@nestjs/testing';
import { StaffMstService } from './staff-mst.service';

describe('StaffMstService', () => {
  let service: StaffMstService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StaffMstService],
    }).compile();

    service = module.get<StaffMstService>(StaffMstService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
