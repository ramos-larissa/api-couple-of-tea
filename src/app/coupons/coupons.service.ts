import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

import { CreateCouponDto } from './dto/create-coupon.dto';
import { Tag } from '@prisma/client';

@Injectable()
export class CouponsService {
  constructor(private readonly prisma: PrismaService) {}
  async create(createCouponDto: CreateCouponDto, userId: string) {
    return this.prisma.coupon.create({
      data: {
        ...createCouponDto,
        userId,
      },
    });
  }

  async findAll() {
    return this.prisma.coupon.findMany();
  }

  async findOne(id: string) {
    return await this.prisma.coupon.findUnique({
      where: { id },
    });
  }

  async findByUser(userId: string) {
    return await this.prisma.coupon.findMany({
      where: { userId },
    });
  }

  async findBySearch(search: string) {
    return await this.prisma.coupon.findMany({
      where: {
        OR: [
          { name: { contains: search } },
          { description: { contains: search } },
        ],
      },
    });
  }

  async findByTag(tag: Tag) {
    return await this.prisma.coupon.findMany({
      where: {
        tag: tag,
      },
    });
  }

  async remove(id: string) {
    return this.prisma.coupon.delete({
      where: { id },
    });
  }
}
