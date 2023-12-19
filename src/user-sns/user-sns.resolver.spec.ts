import { Test, TestingModule } from '@nestjs/testing';
import { UserSnsResolver } from './user-sns.resolver';

describe('UserSnsResolver', () => {
  let resolver: UserSnsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserSnsResolver],
    }).compile();

    resolver = module.get<UserSnsResolver>(UserSnsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
