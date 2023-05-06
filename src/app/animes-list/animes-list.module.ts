import { Module } from '@nestjs/common';
import { AnimesListService } from './animes-list.service';
import { AnimesListController } from './animes-list.controller';

@Module({
  controllers: [AnimesListController],
  providers: [AnimesListService]
})
export class AnimesListModule {}
