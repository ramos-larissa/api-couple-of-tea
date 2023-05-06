import { Test, TestingModule } from '@nestjs/testing';
import { WishlistWeddingService } from './wishlist-wedding.service';

describe('WishlistWeddingService', () => {
  let service: WishlistWeddingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WishlistWeddingService],
    }).compile();

    service = module.get<WishlistWeddingService>(WishlistWeddingService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
