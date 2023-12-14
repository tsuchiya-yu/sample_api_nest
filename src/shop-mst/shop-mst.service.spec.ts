import { Test, TestingModule } from '@nestjs/testing';
import { ShopMstService } from './shop-mst.service';

describe('ShopMstService', () => {
  let service: ShopMstService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ShopMstService],
    }).compile();

    service = module.get<ShopMstService>(ShopMstService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
