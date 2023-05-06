import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CouponsService } from './coupons.service';
import { CreateCouponDto } from './dto/create-coupon.dto';
import { Public } from 'src/middlewares/auth/public.decorator';

@Public()
@Controller('coupons')
export class CouponsController {
  constructor(private readonly couponsService: CouponsService) {}

  @Post('create')
  create(@Body() createCouponDto: CreateCouponDto, @Param() userId: string) {
    return this.couponsService.create(createCouponDto, userId);
  }

  @Get()
  findAll() {
    return this.couponsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.couponsService.findOne(id);
  }

  @Get('user/:id')
  findByUser(@Param('id') id: string) {
    return this.couponsService.findByUser(id);
  }

  @Get('search/:search')
  findBySearch(@Param('search') search: string) {
    return this.couponsService.findBySearch(search);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.couponsService.remove(id);
  }
}
