import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { WishlistWeddingService } from './wishlist-wedding.service';
import { CreateWishlistWeddingDto } from './dto/create-wishlist-wedding.dto';
import { UpdateWishlistWeddingDto } from './dto/update-wishlist-wedding.dto';
import { ApiTags } from '@nestjs/swagger';
import { Public } from '../../middlewares/auth/public.decorator';

@Public()
@ApiTags('wishlist-wedding')
@Controller('wishlistwedding')
export class WishlistWeddingController {
  constructor(
    private readonly wishlistWeddingService: WishlistWeddingService,
  ) {}

  @Post('/create')
  create(@Body() createWishlistWeddingDto: CreateWishlistWeddingDto) {
    console.log('bate aqui');
    return this.wishlistWeddingService.create(createWishlistWeddingDto);
  }

  @Get()
  findAll() {
    return this.wishlistWeddingService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.wishlistWeddingService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateWishlistWeddingDto: UpdateWishlistWeddingDto,
  ) {
    return this.wishlistWeddingService.update(id, updateWishlistWeddingDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.wishlistWeddingService.remove(id);
  }
}
