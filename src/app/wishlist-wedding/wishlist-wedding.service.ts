import { Injectable } from '@nestjs/common';
import { CreateWishlistWeddingDto } from './dto/create-wishlist-wedding.dto';
import { UpdateWishlistWeddingDto } from './dto/update-wishlist-wedding.dto';

@Injectable()
export class WishlistWeddingService {
  create(createWishlistWeddingDto: CreateWishlistWeddingDto) {
    return 'This action adds a new wishlistWedding';
  }

  findAll() {
    return `This action returns all wishlistWedding`;
  }

  findOne(id: number) {
    return `This action returns a #${id} wishlistWedding`;
  }

  update(id: number, updateWishlistWeddingDto: UpdateWishlistWeddingDto) {
    return `This action updates a #${id} wishlistWedding`;
  }

  remove(id: number) {
    return `This action removes a #${id} wishlistWedding`;
  }
}
