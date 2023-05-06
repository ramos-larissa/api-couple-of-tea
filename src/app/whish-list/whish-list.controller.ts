import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { WhishListService } from './whish-list.service';
import { CreateWhishListDto } from './dto/create-whish-list.dto';
import { UpdateWhishListDto } from './dto/update-whish-list.dto';

@Controller('whish-list')
export class WhishListController {
  constructor(private readonly whishListService: WhishListService) {}

  @Post()
  create(@Body() createWhishListDto: CreateWhishListDto) {
    return this.whishListService.create(createWhishListDto);
  }

  @Get()
  findAll() {
    return this.whishListService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.whishListService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateWhishListDto: UpdateWhishListDto) {
    return this.whishListService.update(+id, updateWhishListDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.whishListService.remove(+id);
  }
}
