import { IsBoolean, IsInt, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { WishlistWedding } from '../entities/wishlist-wedding.entity';
import { Prisma } from '.prisma/client';

export class CreateWishlistWeddingDto implements WishlistWedding {
  @IsOptional()
  @IsString()
  id?: string;

  @IsString()
  @IsNotEmpty()
  nameNOK: string;

  @IsString()
  @IsNotEmpty()
  descriptionNOK: string;

  @IsString()
  @IsNotEmpty()
  nameBRL: string;

  @IsString()
  @IsNotEmpty()
  descriptionBRL: string;

  @IsNotEmpty()
  priceNOK: number;

  @IsNotEmpty()
  priceBRL: number;

  @IsNotEmpty()
  @IsInt()
  quantity: number;

  @IsOptional()
  @IsString()
  link?: string;

  @IsOptional()
  @IsBoolean()
  status: boolean;

  @IsOptional()
  @IsString()
  image?: string;

  @IsOptional()
  buyer?: Prisma.JsonArray;

  @IsOptional()
  createdAt?: Date | string;

  @IsOptional()
  updatedAt?: Date | string;
}
