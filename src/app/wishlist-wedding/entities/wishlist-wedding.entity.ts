import { ApiProperty } from '@nestjs/swagger';
import { Prisma } from '.prisma/client';

export class WishlistWedding implements Prisma.WhishlistWeddingUncheckedCreateInput {
  @ApiProperty()
  id?: string;

  @ApiProperty()
  nameNOK: string;

  @ApiProperty()
  nameBRL: string;

  @ApiProperty()
  descriptionNOK: string;

  @ApiProperty()
  descriptionBRL: string;

  @ApiProperty()
  priceNOK: number;

  @ApiProperty()
  priceBRL: number;

  @ApiProperty()
  quantity: number;

  @ApiProperty()
  link?: string;

  @ApiProperty()
  status: boolean;

  @ApiProperty()
  image?: string;

  @ApiProperty()
  buyer?: Prisma.JsonArray;

  @ApiProperty()
  createdAt?: Date | string;

  @ApiProperty()
  updatedAt?: Date | string;
}
