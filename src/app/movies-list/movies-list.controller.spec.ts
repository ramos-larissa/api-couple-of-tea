import { Test, TestingModule } from '@nestjs/testing';
import { MoviesListController } from './movies-list.controller';
import { MoviesListService } from './movies-list.service';

describe('MoviesListController', () => {
  let controller: MoviesListController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MoviesListController],
      providers: [MoviesListService],
    }).compile();

    controller = module.get<MoviesListController>(MoviesListController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
