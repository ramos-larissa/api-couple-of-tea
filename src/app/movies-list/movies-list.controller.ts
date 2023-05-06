import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MoviesListService } from './movies-list.service';
import { CreateMoviesListDto } from './dto/create-movies-list.dto';
import { UpdateMoviesListDto } from './dto/update-movies-list.dto';

@Controller('movies-list')
export class MoviesListController {
  constructor(private readonly moviesListService: MoviesListService) {}

  @Post()
  create(@Body() createMoviesListDto: CreateMoviesListDto) {
    return this.moviesListService.create(createMoviesListDto);
  }

  @Get()
  findAll() {
    return this.moviesListService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.moviesListService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMoviesListDto: UpdateMoviesListDto) {
    return this.moviesListService.update(+id, updateMoviesListDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.moviesListService.remove(+id);
  }
}
