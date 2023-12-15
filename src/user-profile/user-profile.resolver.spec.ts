import { Test, TestingModule } from '@nestjs/testing';
import { UserProfileResolver } from './user-profile.resolver';

describe('UserProfileResolver', () => {
  let resolver: UserProfileResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserProfileResolver],
    }).compile();

    resolver = module.get<UserProfileResolver>(UserProfileResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
