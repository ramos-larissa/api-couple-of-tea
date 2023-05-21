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
    const { buyer, quantity } = updateWishlistWeddingDto;
    if (buyer.length === quantity) {
      updateWishlistWeddingDto.status = true;
      return this.prisma.whishlistWedding.update({
        where: { id },
        data: {
          status: true,
        },
      });
    }

    if (updateWishlistWeddingDto.status === true) {
      throw new Error('Is not possible to update a product with status true');
    }

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
