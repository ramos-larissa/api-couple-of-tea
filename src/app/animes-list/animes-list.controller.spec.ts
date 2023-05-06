import { Test, TestingModule } from '@nestjs/testing';
import { AnimesListController } from './animes-list.controller';
import { AnimesListService } from './animes-list.service';

describe('AnimesListController', () => {
  let controller: AnimesListController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AnimesListController],
      providers: [AnimesListService],
    }).compile();

    controller = module.get<AnimesListController>(AnimesListController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
