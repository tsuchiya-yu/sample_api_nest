import { Test, TestingModule } from '@nestjs/testing';
import { MenuMstService } from './menu-mst.service';

describe('MenuMstService', () => {
  let service: MenuMstService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MenuMstService],
    }).compile();

    service = module.get<MenuMstService>(MenuMstService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
