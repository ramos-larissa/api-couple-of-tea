import { Module } from '@nestjs/common';
import { MoviesListService } from './movies-list.service';
import { MoviesListController } from './movies-list.controller';

@Module({
  controllers: [MoviesListController],
  providers: [MoviesListService]
})
export class MoviesListModule {}
