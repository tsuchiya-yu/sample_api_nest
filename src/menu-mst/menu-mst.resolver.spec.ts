import { Test, TestingModule } from '@nestjs/testing';
import { MenuMstResolver } from './menu-mst.resolver';

describe('MenuMstResolver', () => {
  let resolver: MenuMstResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MenuMstResolver],
    }).compile();

    resolver = module.get<MenuMstResolver>(MenuMstResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
