import { Test, TestingModule } from '@nestjs/testing';
import { WhishListController } from './whish-list.controller';
import { WhishListService } from './whish-list.service';

describe('WhishListController', () => {
  let controller: WhishListController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WhishListController],
      providers: [WhishListService],
    }).compile();

    controller = module.get<WhishListController>(WhishListController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
