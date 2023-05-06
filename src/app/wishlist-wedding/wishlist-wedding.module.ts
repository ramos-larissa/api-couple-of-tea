import { Module } from '@nestjs/common';
import { WishlistWeddingService } from './wishlist-wedding.service';
import { WishlistWeddingController } from './wishlist-wedding.controller';

@Module({
  controllers: [WishlistWeddingController],
  providers: [WishlistWeddingService]
})
export class WishlistWeddingModule {}
