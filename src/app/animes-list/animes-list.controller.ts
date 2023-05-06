import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AnimesListService } from './animes-list.service';
import { CreateAnimesListDto } from './dto/create-animes-list.dto';
import { UpdateAnimesListDto } from './dto/update-animes-list.dto';

@Controller('animes-list')
export class AnimesListController {
  constructor(private readonly animesListService: AnimesListService) {}

  @Post()
  create(@Body() createAnimesListDto: CreateAnimesListDto) {
    return this.animesListService.create(createAnimesListDto);
  }

  @Get()
  findAll() {
    return this.animesListService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.animesListService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAnimesListDto: UpdateAnimesListDto) {
    return this.animesListService.update(+id, updateAnimesListDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.animesListService.remove(+id);
  }
}
