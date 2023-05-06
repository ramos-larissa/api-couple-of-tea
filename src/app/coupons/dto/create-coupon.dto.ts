import {
  IsBoolean,
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';
import { Coupon } from '../entities/coupon.entity';
import { Tag } from '@prisma/client';

export class CreateCouponDto implements Coupon {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsOptional()
  @IsBoolean()
  redeemed?: boolean;

  @IsString()
  @IsNotEmpty()
  tag: Tag;

  @IsString()
  @IsNotEmpty()
  userId: string;

  @IsNotEmpty()
  expiresAt: Date;

  createdAt?: Date;
  updatedAt?: Date;
}
