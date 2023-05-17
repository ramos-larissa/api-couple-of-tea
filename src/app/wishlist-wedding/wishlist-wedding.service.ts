import { Injectable } from '@nestjs/common';
import { CreateWishlistWeddingDto } from './dto/create-wishlist-wedding.dto';
import { UpdateWishlistWeddingDto } from './dto/update-wishlist-wedding.dto';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class WishlistWeddingService {
  constructor(private readonly prisma: PrismaService) {}
  async create(createWishlistWeddingDto: CreateWishlistWeddingDto) {
    const data = {
      ...createWishlistWeddingDto,
    };
    return this.prisma.whishlistWedding.create({ data });
  }

  async findAll() {
    return this.prisma.whishlistWedding.findMany();
  }

  async findOne(id: string) {
    return this.prisma.whishlistWedding.findUnique({
      where: { id },
    });
  }

  async update(id: string, updateWishlistWeddingDto: UpdateWishlistWeddingDto) {
    return this.prisma.whishlistWedding.update({
      where: { id },
      data: updateWishlistWeddingDto,
    });
  }

  async remove(id: string) {
    return this.prisma.whishlistWedding.delete({
      where: { id },
    });
  }
}
