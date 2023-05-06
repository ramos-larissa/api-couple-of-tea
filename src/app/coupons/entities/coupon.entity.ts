import { Prisma, Tag } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';
export class Coupon implements Prisma.CouponUncheckedCreateInput {
  @ApiProperty({
    example: 'bd7807d9-feae-436c-ae87-2b47efc20ab9',
    description: 'The id of the coupon',
  })
  id?: string;

  @ApiProperty({ example: 'Coupon name', description: 'Coupon Pizza' })
  name: string;

  @ApiProperty({
    example: 'Coupon description',
    description: 'Coupon description',
  })
  description: string;

  @ApiProperty({ required: false })
  redeemed?: boolean;

  @ApiProperty({ example: 'FOOD', enum: Tag })
  tag: Tag;

  @ApiProperty({ example: 'bd7807d9-feae-436c-ae87-2b47efc20ab9' })
  userId: string;

  @ApiProperty({ example: '2021-09-01T00:00:00.000Z' })
  expiresAt: Date;

  @ApiProperty({ example: '2021-09-01T00:00:00.000Z', required: false })
  createdAt?: Date;

  @ApiProperty({ example: '2021-09-01T00:00:00.000Z', required: false })
  updatedAt?: Date;
}
