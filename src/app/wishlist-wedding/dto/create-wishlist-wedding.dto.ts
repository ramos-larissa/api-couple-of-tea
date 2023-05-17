import {
  IsBoolean,
  IsCurrency,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateWishlistWeddingDto {
  @IsOptional()
  @IsString()
  id?: string;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsNotEmpty()
  priceNOK: number;

  @IsNotEmpty()
  priceBRL: number;

  @IsOptional()
  @IsString()
  link?: string;

  @IsNotEmpty()
  @IsBoolean()
  status: boolean;

  @IsOptional()
  @IsString()
  image?: string;

  @IsOptional()
  buyer?: any;

  @IsOptional()
  createdAt?: Date | string;

  @IsOptional()
  updatedAt?: Date | string;
}
