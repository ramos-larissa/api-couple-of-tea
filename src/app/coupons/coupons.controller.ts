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
  create(@Body() createCouponDto: CreateCouponDto) {
    return this.couponsService.create(createCouponDto);
  }

  @Get()
  findAll() {
    return this.couponsService.findAll();
  }

  @Get('use/:id')
  use(@Param('id') id: string) {
    return this.couponsService.use(id);
  }

  @Get('redeemed')
  redeemed() {
    return this.couponsService.redeemed();
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
