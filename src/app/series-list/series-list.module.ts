import { Module } from '@nestjs/common';
import { SeriesListService } from './series-list.service';
import { SeriesListController } from './series-list.controller';

@Module({
  controllers: [SeriesListController],
  providers: [SeriesListService]
})
export class SeriesListModule {}
