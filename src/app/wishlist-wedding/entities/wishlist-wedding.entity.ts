import { Prisma } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class WishlistWedding implements Prisma.WhishlistWeddingUncheckedCreateInput {
  @ApiProperty()
  id?: string;
  @ApiProperty()
  name: string;
  @ApiProperty()
  description: string;
  @ApiProperty()
  priceNOK: number;
  @ApiProperty()
  priceBRL: number;
  @ApiProperty()
  link?: string;
  @ApiProperty()
  status: boolean;
  @ApiProperty()
  image?: string;
  @ApiProperty()
  buyer?: Prisma.BuyerCreateNestedOneWithoutProductInput;
  @ApiProperty()
  createdAt?: Date | string;
  @ApiProperty()
  updatedAt?: Date | string;
}
