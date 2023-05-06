import { Test, TestingModule } from '@nestjs/testing';
import { SeriesListController } from './series-list.controller';
import { SeriesListService } from './series-list.service';

describe('SeriesListController', () => {
  let controller: SeriesListController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SeriesListController],
      providers: [SeriesListService],
    }).compile();

    controller = module.get<SeriesListController>(SeriesListController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
