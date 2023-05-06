import { Injectable } from '@nestjs/common';
import { CreateSeriesListDto } from './dto/create-series-list.dto';
import { UpdateSeriesListDto } from './dto/update-series-list.dto';

@Injectable()
export class SeriesListService {
  create(createSeriesListDto: CreateSeriesListDto) {
    return 'This action adds a new seriesList';
  }

  findAll() {
    return `This action returns all seriesList`;
  }

  findOne(id: number) {
    return `This action returns a #${id} seriesList`;
  }

  update(id: number, updateSeriesListDto: UpdateSeriesListDto) {
    return `This action updates a #${id} seriesList`;
  }

  remove(id: number) {
    return `This action removes a #${id} seriesList`;
  }
}
