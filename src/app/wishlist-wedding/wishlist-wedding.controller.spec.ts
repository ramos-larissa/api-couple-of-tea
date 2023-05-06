import { Test, TestingModule } from '@nestjs/testing';
import { WishlistWeddingController } from './wishlist-wedding.controller';
import { WishlistWeddingService } from './wishlist-wedding.service';

describe('WishlistWeddingController', () => {
  let controller: WishlistWeddingController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WishlistWeddingController],
      providers: [WishlistWeddingService],
    }).compile();

    controller = module.get<WishlistWeddingController>(WishlistWeddingController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
