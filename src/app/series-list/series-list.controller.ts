import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SeriesListService } from './series-list.service';
import { CreateSeriesListDto } from './dto/create-series-list.dto';
import { UpdateSeriesListDto } from './dto/update-series-list.dto';

@Controller('series-list')
export class SeriesListController {
  constructor(private readonly seriesListService: SeriesListService) {}

  @Post()
  create(@Body() createSeriesListDto: CreateSeriesListDto) {
    return this.seriesListService.create(createSeriesListDto);
  }

  @Get()
  findAll() {
    return this.seriesListService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.seriesListService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSeriesListDto: UpdateSeriesListDto) {
    return this.seriesListService.update(+id, updateSeriesListDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.seriesListService.remove(+id);
  }
}
