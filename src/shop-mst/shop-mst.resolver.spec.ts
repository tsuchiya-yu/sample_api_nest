import { Test, TestingModule } from '@nestjs/testing';
import { ShopMstResolver } from './shop-mst.resolver';

describe('ShopMstResolver', () => {
  let resolver: ShopMstResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ShopMstResolver],
    }).compile();

    resolver = module.get<ShopMstResolver>(ShopMstResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
