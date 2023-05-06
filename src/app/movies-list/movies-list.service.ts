import { Injectable } from '@nestjs/common';
import { CreateMoviesListDto } from './dto/create-movies-list.dto';
import { UpdateMoviesListDto } from './dto/update-movies-list.dto';

@Injectable()
export class MoviesListService {
  create(createMoviesListDto: CreateMoviesListDto) {
    return 'This action adds a new moviesList';
  }

  findAll() {
    return `This action returns all moviesList`;
  }

  findOne(id: number) {
    return `This action returns a #${id} moviesList`;
  }

  update(id: number, updateMoviesListDto: UpdateMoviesListDto) {
    return `This action updates a #${id} moviesList`;
  }

  remove(id: number) {
    return `This action removes a #${id} moviesList`;
  }
}
